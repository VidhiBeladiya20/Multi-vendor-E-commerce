const express = require("express");
const app = express();
const cors = require("cors");
const user = require("./router/auth-router");
const seller = require("./router/seller-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middlewarre");

// let's tackle cors and must write first
const corsOption = {
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials : true,
}
app.use(cors(corsOption));


app.use(express.json());   //middleware  
app.use("/user",user);
app.use("/seller",seller);
// app.use("/product",product);

app.use(errorMiddleware); //error middleware
connectDb().then(()=>{
    app.listen("5000",()=>{
        console.log("Running at port number 5000");
    })
})
