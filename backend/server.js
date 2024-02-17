const express = require("express");
const app = express();
const user = require("./router/auth-router");
const connectDb = require("./utils/db");

app.use(express.json());   //middleware

app.use("/user",user);


connectDb().then(()=>{
    app.listen("5000",()=>{
        console.log("Running at port number 5000");
    })
})
