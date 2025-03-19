const mongooose = require('mongoose');

const cartSchema = new mongooose.Schema({

    products:[
        {
            type:mongooose.Schema.ObjectId,
            ref:"Product"
        }
    ],
    total:{
        type:Number
    }
})
const Cart =mongooose.model('Cart',cartSchema);
module.exports={Cart};