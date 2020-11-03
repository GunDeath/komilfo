const express = require('express');
const router = express.Router();
const {getProducts, getProductById} = require('../controllers/productController')
const {filterProductUp, filterProductLow, sortProductsLow,
       sortProductsUpper, filterProductsByBrand,
       filterProductsByCategory, filterProductsBySubCategory} = require('../controllers/productsFilter')

//get products
router.route('/').get(getProducts);
//get single product
router.route('/:id').get(getProductById);
//filter products
router.route('/filter/up/:price').get(filterProductUp);
router.route('/filter/low/:price').get(filterProductLow);
//sort products
router.route('/sort/low').get(sortProductsLow);
router.route('/sort/up').get(sortProductsUpper);
//get products by brand
router.route('/brand/:brand').get(filterProductsByBrand);
//get products by category
router.route('/category/:category').get(filterProductsByCategory);
//get products by subCategory
router.route('/category/:subCategory').get(filterProductsBySubCategory);

module.exports = router;