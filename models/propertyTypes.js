const  mongoose = require('mongoose');


var Schema = mongoose.Schema;

const propertyTypesSchema = new Schema({
   
    type: {
        type: String,
        required: true,
        enum: ['land', 'apartment-cash', 'apartment-installment', 'shop-rent','shop-sale','house' ,'villa','roof','apartment-rent']
    },
    is_active: {
        type: Boolean,
        default: true
    },
},{timestamps: true} 
);

const propertyTypes = mongoose.model("propertyTypes",propertyTypesSchema);



module.exports = propertyTypes;