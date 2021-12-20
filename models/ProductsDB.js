const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Products = new Schema({
    coverImage:{
        type: String,
        required: false
    },
    coverImageAlt:{
        type: String,
        required: false
    },
    productName: {
        type: String,
        required: false,
        min: [1]
    },
    category: {
        type: String,
        required: false
    },
    productType: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    price:{
        type: Number,
        required: false
    },
    amazonLink: {
        type: String,
        required: false
    },
    aboutThisItem:{
        type: String,
        required: false
    },
    gallery_images: [
        {
            imageURL: {
                type: String,
                required: false
            }
        }
    ],
    description: {
        type: String,
        required: false
    },
    descriptionGallery: [
        {
            descriptionImageURL: {
                type: String,
                required: false
            }
        }
    ],
    upload_date: {
        type: Date,
        required: false
    }
}, {timestamps: true});

const ProductsDB = mongoose.model("Products", Products);
module.exports = ProductsDB;