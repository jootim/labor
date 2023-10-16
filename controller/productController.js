const Product = require('../model/productModel')
const asyncHandler = require('express-async-handler')


// const mainPage = asyncHandler(async (req,res)=>{
    
// try {
//     // const products = await Product.find({})
//     // res.status(200).json(products)
//     res.sendFile(__dirname + "/index.html");
// } catch (error) {
//     res.status(500)
//     throw new Error(error.message)
// }
// })

const getProducts = asyncHandler(async (req,res)=>{
    
try {
    const products = await Product.find({})
    res.status(200).json(products)
} catch (error) {
    res.status(500)
    throw new Error(error.message)
}
})

const getSingleProduct = asyncHandler(async (req,res)=>{
try {
    const {id} = req.params
    const product = await Product.findById(id)
    res.status(200).json(product)
} catch (error) {
    res.status(500)
    throw new Error(error.message)
}
})

const updateProduct = asyncHandler(async (req,res)=>{
   try {
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id,req.body)
    if(!product){
        return res.status(404).json({message:`can not find any product with id ${id} provided`})
    }
    const updatedProduct = await Product.findById(id)
    res.status(200).json(updatedProduct)
} catch (error) {
     res.status(500)
    throw new Error(error.message)
} 
})

const deleteProduct = asyncHandler(async (req,res)=>{
    try {
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id,req.body)
    if(!product){
        return res.status(404).json({message:`no product with id ${id} provided`})
    }
    const updatedProduct = await Product.findById(id)
    res.status(200).json(product)
} catch (error) {
     res.status(500)
    throw new Error(error.message)
} 
})


module.exports = {
    getProducts,getSingleProduct,updateProduct,deleteProduct,mainPage
}