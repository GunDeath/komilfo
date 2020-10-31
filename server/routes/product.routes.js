const express = require('express');
const asyncHandler = require('express-async-handler');
const Product = require('../models/Product.model');

const router = express.Router();

//get all products
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

//get single product
router.get('/:id', asyncHandler( async(req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
}))

//get products low that get price
router.get('/filter/low/:price', asyncHandler(async (req, res) => {
    const products = await Product.find({price : {$lt : req.params.price}})
    if(products){
        res.json(products)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    res.send(`Get`)

}))

//get products upper then get price
router.get('/filter/up/:price', asyncHandler(async (req, res) => {
    const products = await Product.find({price : {$gt : req.params.price}})
    if(products){
        res.json(products)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    res.send(`Get`)

}))

//get product up price first
router.get('/sort/up', asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({price: -1})
    if(products){
        res.json(products)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    res.send(`Get`)

}))

//get product low price first
router.get('/sort/low', asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({price: 1})
    if(products){
        res.json(products)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    res.send(`Get`)

}))

//filter products by brand
router.get('/brand/:brand', asyncHandler(async (req, res) => {
    const product = await Product.find({brand: req.params.brand})
    if(product) {
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
}))

//filter products by category
router.get('/category/:category', asyncHandler(async (req, res) => {
    const product = await Product.find({category: req.params.category})
    if(product) {
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
}))

module.exports = router;