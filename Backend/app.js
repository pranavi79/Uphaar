const express= require("express");
const app=express();
const errorMiddleware=require("./middleware/error");

// Middleware to read the body of http post request
app.use(express.json());

//Routes
const product= require("./routes/productRoute");

app.use("/api/v1",product);

// Middleware for error handling
app.use(errorMiddleware);

module.exports=app;
