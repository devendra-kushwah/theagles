import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserService from "../services/user";
import User from "../models/user";
import baseHelper from "../../../utils/status";
import hashPassword from "../../../utils/hashPassword";


import config from "../../../config";

const { SECRET_KEY } = config;

class UserController {
  // signup
  async create(req, res) {
    try {
      const { email, mobile, password } = req.body;
      const fieldsValue = email && mobile && password;
      if (!fieldsValue) {
        res.status(422).json({ error: "all fields are required" });
      }
      // if existing user
      const user = await User.findOne({
        $or: [{ email: email }, { mobile: mobile }],
      });
      if (user) {
        let errors = "";
        if (user.email === email) {
          errors = "Email already registered";
        } else {
          errors = "Number already registered";
        }
        return baseHelper.error(res, errors);
      }
      const hashed = await hashPassword(password);
      const data = new User({
        email,
        mobile,
        password: hashed,
      });
      const response = await UserService.create(data);
      return baseHelper.success(res, response);
    } catch (error) {
      return baseHelper.error(res, error, 422);
    }
  }

  // Sign in
  async read(req, res) {
    try {
      const { email, mobile, password } = req.body;
      const fieldsValue = (email && mobile) || password;
      if (!fieldsValue) {
        const error = "Required fields";
        return baseHelper.error(res, error);
      }
      const user = await User.findOne({
        $or: [{ email: email }, { mobile: mobile }],
      });
      if (user) {
        const matched = await bcrypt.compare(password, user.password);
        if (matched) {
          const token = jwt.sign({ _id: user._id }, SECRET_KEY);
          const response = {
            _id: user._id,
            message: "Successfully logged in",
            mobile: user.mobile,
            email: user.email,
            token: token,
          };
          return baseHelper.success(res, response);
        }
      } else {
        const error = "Invalid email or password";
        return baseHelper.error(res, error);
      }
    } catch (error) {
      // return baseHelper.error(res, error);
      return res.status(422).json({ error: error });
    }
  }
}

export default new UserController();
