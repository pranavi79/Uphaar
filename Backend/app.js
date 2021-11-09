const express= require("express");
const cookieParser = require("cookie-parser");
const app=express();
const errorMiddleware=require("./middleware/error");

// Middleware to read the body of http post request
app.use(express.json());
app.use(cookieParser());

//Routes
const product= require("./routes/productRoute");
const user= require("./routes/userRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);

// Middleware for error handling
app.use(errorMiddleware);

module.exports=app;
