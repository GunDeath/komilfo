const asyncHandler = require('express-async-handler');
const Product = require('../models/Product.model');

const filterProductUp = asyncHandler(async (req, res) => {
    const products = await Product.find({price : {$gt: req.params.price}})
    if(products){
        res.json(products)
    }else{
        res.status(404);
        throw new Error(`Products not found`)
    }
})

const filterProductLow = asyncHandler( async (req, res) => {
    const products = await Product.find({price: {$lt : req.params.price}})
    if(products){
        res.json(products)
    }else{
        res.status(404);
        throw new Error(`Products not found`)
    }
})

const sortProductsLow = asyncHandler( async (req, res) => {
    const products = await Product.find({}).sort({price: 1})
    if(products){
        res.json(products)
    }else{
        res.status(404);
        throw new Error(`Products not found`)
    }
})

const sortProductsUpper = asyncHandler( async (req, res) => {
    const products = await Product.find({}).sort({price: -1})
    if(products){
        res.json(products)
    }else{
        res.status(404);
        throw new Error(`Products not found`)
    }
})

const filterProductsByBrand = asyncHandler( async (req, res) => {
    const products = await Product.find({brand: req.params.brand})
    if(products){
        res.json(products)
    }else{
        res.status(404);
        throw new Error(`Products not found`)
    }
})

const filterProductsByCategory = asyncHandler( async (req, res) => {
    const products = await Product.find({category: req.params.category})
    if(products){
        res.json(products)
    }else{
        res.status(404);
        throw new Error(`Products not found`)
    }
})

const filterProductsBySubCategory = asyncHandler( async (req, res) => {
    const products = await Product.find({subCategory: req.params.subCategory});
    if(products){
        res.json(products)
    }else{
        res.status(404);
        throw new Error(`Products not found`)
    }
})

module.exports = {
    filterProductUp,
    filterProductLow,
    sortProductsLow,
    sortProductsUpper,
    filterProductsByBrand,
    filterProductsByCategory,
    filterProductsBySubCategory
}