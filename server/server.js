const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors')
const products = require('./data/products');
const connectDB = require('./config/DB')

dotenv.config()

connectDB();

const app = express();

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline.bold)
})