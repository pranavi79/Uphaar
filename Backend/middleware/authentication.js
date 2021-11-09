const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const isAuthenticatedUser= catchAsyncErrors(async (req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return next(new ErrorHandler("Please Login",401));
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    res.user=await User.findById(decodedData.id);
})