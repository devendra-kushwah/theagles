import jwt from "jsonwebtoken";
import UserService from "../services/user";
import User from "../models/user";
import baseHelper from "../utils/status";
import hashPassword from "./hashPassword";
import bcrypt from "bcrypt";

import config from "../config";

const { SECRET_KEY } = config;
class UserController {
  // signup
  async create(req, res) {
    try {
      const { email, mobile, password } = req.body;
      const requiredFields = email && mobile && password;
      if (!requiredFields) {
        res.status(422).json({ error: "all fields are required" });
      }
      // if existing user
      const existingUser = await User.findOne(
        { email: email } && { mobile: mobile }
      ).lean();
      if (existingUser) {
        const error = "already exist";
        return baseHelper.error(res, error);
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
      const requiredField = (email && password) || (mobile && password);
      if (!requiredField) {
        const error = "Required fields";
        return baseHelper.error(res, error);
      }
      const user = await User.findOne({ email: email });
      if (user) {
        const matched = await bcrypt.compare(password, user.password);
        if (matched) {
          const token = jwt.sign({ _id: user._id }, SECRET_KEY);
          const response = {
            message: "successfully logged in",
            token: token,
          };
          return baseHelper.success(res, response);
        }
      } else {
        const error = "invalid credentials";
        return baseHelper.error(res, error);
      }
    } catch (error) {
      // return baseHelper.error(res, error);
      return res.status(422).json({ error: error, message: "none" });
    }
  }
}

module.exports = new UserController();
