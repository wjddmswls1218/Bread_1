import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import Bread from "../models/Bread";
import mongoose from "mongoose";
import morgan from "morgan";
import globalRouter from "./router/globalRouter"; 

const PORT = process.env.PORT; 
const app = express();

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "/assets")));

app.use(morgan(`dev`));


mongoose.connect(
    `mongodb://4leaf:fourleaf0309@210.114.1.127:27017/admin`,
    {
        dbName: `JEJ_PRA`,
        useNewUrlParser: true,
        useCreateIndex: true,
    },
    (error) => {
        if (error) {
            console.log("❌ Failed To DB Connect");
        } else {
            console.log("😍 DB DB!!");
        }
    }
);

app.get("/",globalRouter);

app.get("/bread", async (req,res)=> {
    const result = await Bread.find({},{});
  
    return res.render("screens/bread",{bread: result});
});

app.get("/bread")
  

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(` ${PORT} SEVER START`);
});