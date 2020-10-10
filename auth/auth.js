import jwt from "jsonwebtoken";
import config from "../config";
import baseHelper from "../baseHelper";
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
    req.user = user;
    next();
  });
};
