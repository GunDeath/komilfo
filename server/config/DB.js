const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex : true
        })

        console.log(`MongoDB connected: ${connect.connection.host}`.blue.underline)
    }catch (err){
        console.error(`Error: ${err.message}`.red.underline.bold);
        process.exit(1)
    }
}

module.exports = connectDB;