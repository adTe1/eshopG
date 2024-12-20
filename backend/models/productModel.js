const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({ //pass scema as an object
    name: {
        type: String,
        required: [true, 'A product must have a name'],
        unique: true
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    ratingsAverage: {
            type: Number,
            default:4.5
    },
    summary: {
        type: String,
        required: [true, 'A product must have a description']
    },
    description: {
        type: String,
        trim: true,
    },
    imageCover: {
        type: String,
        //required:[true, 'A product must have cover image']
    },
    images: [String],
    brand: {
        type: String,
        default: ''
    },
    countInStock: {
        type: Number,
        required: [true, ' A product must have quantity'],
        min: 0,
        max: 255
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    price:  {
            type: Number,
            required: [true, 'A product must have a price']
    },
    priceDiscount: Number,

   

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;