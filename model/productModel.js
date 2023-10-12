const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter the name"]
        },
        quantity:{
            type:Number,
            require:true,
            default:0
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:false
        }
    
    },{
        timestamps:true
    }
   
)

const product = mongoose.model('product',productSchema)

module.exports = product