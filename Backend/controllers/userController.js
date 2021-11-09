const User =require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

exports.registerUser= catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password} =req.body;
    const user=await User.create({
        name,email,password,
        avatar:{
            public_id:"sample id",
            url:"sample url",
        }
    })
    sendToken(user,201,res);
});

exports.loginUser= catchAsyncErrors(async(req,res,next)=>{
    const {email,password} =req.body;
    if(!email|| !password){
        return next(new ErrorHandler("Please enter Email & Password!",400));
    }
    const user =await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Email & Password!",401));
    }
    const isPasswordMatch =await user.comparePassword(password);
    if(!isPasswordMatch){
        return next(new ErrorHandler("Invalid Email & Password!",401));
    }
    sendToken(user,200,res);
});

exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
  
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  });
