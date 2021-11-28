const Product= require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/appFeautures");

exports.createProduct=catchAsyncErrors (async (req,res,next)=>{
    req.body.user = req.user.id
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
});

exports.getAllProducts=catchAsyncErrors (async (req,res)=>{
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();
    const apiFeatures= new ApiFeatures(Product.find(),req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    const product= await apiFeatures.query;
    res.status(200).json({
        success:true,
        product,
        productsCount,
        resultPerPage,
    });
});

exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
    const products = await Product.find();
  
    res.status(200).json({
      success: true,
      products,
    });
  });
  

exports.getProductDetails = catchAsyncErrors (async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
        return next(new ErrorHandler("product not found",404));
    }
  
    res.status(200).json({
      success: true,
      product,
    });
  });

exports.updateProduct=catchAsyncErrors (async (req,res,next)=>{
    let product=Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("product not found",404));
    }
    product=await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true,runValidators:true,useFindAndModify:false},
    )
    res.status(200).json({
        success:true,
        product
    })
});

exports.deleteProduct=catchAsyncErrors (async(req,res,next)=>{
    const product=await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("product not found",404));
    }
    await product.remove();
    res.status(200).json({
        success:true,
        message: "Product removed successfully"
    })
});