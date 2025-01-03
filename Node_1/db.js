const mongoose = require('mongoose')

//Define the MongoDB connection url

const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL,{
    useNewUrlParser : true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB Server');
    
});

db.on('disconnected',()=>{
    console.log('MongoDB connection disconnected!!!');
    
});

db.on('error',()=>{
    console.log('MongoDB connection error!!!');
    
});

module.exports = db;