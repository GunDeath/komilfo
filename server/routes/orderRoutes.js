const express = require('express');
const router = express.Router();
const {addOrderItems, getOrderById, updateOrderToPayed, getMyOrders} = require('../controllers/orderController');
const {protect} = require('../middleware/authMiddleware');

//get products
router.route('/').post(protect, addOrderItems);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPayed);

module.exports = router;