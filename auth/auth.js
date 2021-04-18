import jwt from "jsonwebtoken";
import config from "../config";
import baseHelper from "../utils/status";
import User from "../models/user";
const { SECRET_KEY } = config;

export default (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: " unauthorized user " });
  }
  const token = authHeader.split(" ")[0];
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      const error = "Unauthorized";
      return baseHelper.error(res, error);
    }
    const { _id } = user;
    User.findById(_id)
      .select(["email", "mobile"]) // get auth users  email and mobile only in response
      .then((userData) => {
        req.user = userData;
        next();
      });
  });
};
