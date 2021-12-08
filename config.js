const PORT = process.env.PORT || 7000;
//  const DB = {
//    url: process.env.DB ||
//  }

const dbUrl = "mongodb://localhost:27017/tweedle";

const SECRET_KEY = "e_learning123@";
const config = {
  userName: "",
  password: "",
  DB: dbUrl,
  PORT,
  SECRET_KEY,
};

export default config;
