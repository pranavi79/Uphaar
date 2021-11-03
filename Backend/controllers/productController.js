const Product= require("../models/productModel");

exports.createProduct=async (req,res,next)=>{
    const product = Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}

exports.getAllProducts=(req,res)=>{
    res.status(200).json({message:"Route is working fine."});
}

exports.updateProduct=async (req,res,next)=>{
    let product=Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    product=await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true,runValidators:true,useFindAndModify:false},
    )
    res.status(201).json({
        success:true,
        product
    })
}