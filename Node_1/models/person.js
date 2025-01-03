const mosgoose = require('mongoose')

// Define person schema

const personSchema = new mosgoose.Schema({
    name:{
        type:String
    }
})