const express = require("express");
const app = express();
const user = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middlewarre");

app.use(express.json());   //middleware
app.use("/user",user);

app.use(errorMiddleware); //error middleware
connectDb().then(()=>{
    app.listen("5000",()=>{
        console.log("Running at port number 5000");
    })
})
