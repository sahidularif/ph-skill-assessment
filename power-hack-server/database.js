// MongoDB Configuration
require('dotenv').config();
const mongoose = require('mongoose');
const DBLOCAL = `mongodb://localhost:27017/powerhack`
const DB = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.or4h7.mongodb.net/renterbd?retryWrites=true&w=majority`
module.exports = async () => {
    try {
        await mongoose.connect(DBLOCAL, {
            autoIndex: false, 
            maxPoolSize: 10, 
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000, 
            family: 4 
        })
        console.log('Connected to Mongodb database')
    } catch (error) {
        console.log(error)
    }

}

