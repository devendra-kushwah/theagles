import express from "express";
import mongoose from "mongoose";
import config from "./config";
import cors from "cors";

const { PORT, userName, password, DB_name } = config;
import router from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", router);

// mongodb+srv://${userName}:${password}@cluster0-fik1z.mongodb.net/${DB_name}?retryWrites=true&w=majority
mongoose
  .connect(`mongodb://localhost:27017/new`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
