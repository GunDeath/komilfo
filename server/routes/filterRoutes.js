const express = require('express');
const asyncHandler = require('express-async-handler');
const Product = require('../models/Product.model');

const router = express.Router();


// router.get('/brand/:brand', asyncHandler(async (req, res) => {
//     const product = await Product.find({brand: req.params.brand})
//     if(product) {
//         res.json(product)
//     }else{
//         res.status(404)
//         throw new Error('Product not found')
//     }
// }))
//
// router.get('/category/:category', asyncHandler(async (req, res) => {
//     const product = await Product.find({category: req.params.category})
//     if(product) {
//         res.json(product)
//     }else{
//         res.status(404)
//         throw new Error('Product not found')
//     }
// }))


module.exports = router;