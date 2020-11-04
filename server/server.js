const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors')
const connectDB = require('./config/DB');
const productRoutes = require('./routes/product.routes');
const orderRouter = require('./routes/orderRoutes')
const userRouter = require('./routes/userRoutes')
const {notFound, errorHandler} = require('./middleware/error.middleware');

dotenv.config()

connectDB();

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline.bold)
})