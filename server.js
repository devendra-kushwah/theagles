import express from "express";
import mongoose from "mongoose";
import config from "./config";
import cors from "cors";

const { PORT, DB } = config;
import router from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", router);

// mongodb+srv://${userName}:${password}@cluster0-fik1z.mongodb.net/${DB_name}?retryWrites=true&w=majority
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(DB, options)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
