import express, { urlencoded } from "express";
import dotenv from "dotenv";
import bodyParser from'body-parser';


import mongoose from "mongoose";
import routers from "./router/router.board.js";
dotenv.config();
const PORT =process.env.PORT || 5000;

 mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB is Connected");
    })
    .catch((error) => {
      console.log(error);
    });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use("/boards",routers);



app.listen(PORT,()=>{
    console.log(`PORT Running at ${PORT}`)
})







