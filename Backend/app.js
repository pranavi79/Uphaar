const express= require("express");
const app=express();

// Middleware to read the body of http post request
app.use(express.json());

//Routes
const product= require("./routes/productRoute");

app.use("/api/v1",product);

module.exports=app;
