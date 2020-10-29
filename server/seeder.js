const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/User.model');
const Product = require('./models/Product.model');
const Order = require('./models/Order.model');
const connectDB = require('./config/DB');

dotenv.config()

connectDB();

const importData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUser = await User.insertMany(users);

        const adminUser = createdUser[0]._id;

        const sampleProducts = products.map(product => {
            return{...product, user: adminUser}
        });

        await Product.insertMany(sampleProducts);

        console.log(`Data Imported!`.green.inverse);
        process.exit();
    }catch (err){
        console.log(`${err}`.red.inverse);
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log(`Data Destroyed!`.red.inverse);
        process.exit();
    }catch (err){
        console.log(`${err}`.red.inverse);
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else {
    importData();
}