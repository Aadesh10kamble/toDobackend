const mongoose = require("mongoose");
const express = require("express");
const dotenv = require ("dotenv");
const taskRouter = require ("./routers/taskRouter");
const cors = require ("cors")
dotenv.config ({
    path :  "./config.env"
});
mongoose.connect(process.env.MONGODB).then(() => console.log("connected to Database"));

app = express();
app.use (cors ());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use ("/api",taskRouter);

app.use ((error,request,response,next) => {
    console.log (error);
});

app.listen (process.env.PORT,() => {
    console.log ("SERVER LIVE");
});

