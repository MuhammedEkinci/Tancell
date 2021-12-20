const mongoose = require("mongoose");
require('dotenv').config();

const ProductsDB = require("../models/ProductsDB");

function getDateandTime(){
    const date = new Date();

    return date;
}

let current_date = getDateandTime();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
});


products = [
    {
        coverImage: "https://m.media-amazon.com/images/I/4140C4Qd9QL._AC_SX500_.jpg",
        coverImageAlt: "tancell-phone-case",
        productName: "TANCELL Case Compatible with iPhone 12 Pro Max Case [Shock-Absorbing] [Scratch-Resistant] [Military Grade Protection] [2 in 1 : Hard Acrylic + Flexible TPU Frame] 6.7 inch 2020",
        category: "Iphone",
        productType: "Phone-Case",
        url: "#/view-product/",
        price: 9.99,
        amazonLink: "https://www.amazon.com/TANCELL-Compatible-Shock-Absorbing-Scratch-Resistant-Protection/dp/B08PK9BBHD?ref_=ast_sto_dp&th=1&psc=1",
        aboutThisItem: "For iPhone 12 Pro Max Clear Acrylic Case + TPU Anti shock case (1 PC )/[Shock-Absorbing] [Scratch- Resistant] [Anti fingerprint / anti watermark]/[Military Grade Protection] [Military Shockproof with 4 air bumper]/[2 in 1 : Hard Acrylic + Flexible TPU Frame] [Crystal Clear & Anti-yellowing]/[Perfect Fit] [Easy side button design ] [Camera protective design ]",
        gallery_images: [
            {
                imageURL: "https://m.media-amazon.com/images/I/4140C4Qd9QL._AC_SX410_SY308_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/41qXEFn2-mL._AC_SX410_SY308_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/51MDzXHHp4L._AC_SX410_SY308_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/513TCXELt-L._AC_SX410_SY308_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/51WDhyx52kL._AC_SX410_SY308_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/5128Tm9N3OL._AC_SX410_SY308_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/51AW8r+OuPL._AC_SX410_SY308_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/513QHe2HVEL._AC_SX410_SY308_.jpg"
            }
            
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        descriptionGallery: [
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/51MDzXHHp4L._AC_SX410_SY308_.jpg"
            },
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/513TCXELt-L._AC_SX410_SY308_.jpg"
            },
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/51WDhyx52kL._AC_SX410_SY308_.jpg"
            },
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/5128Tm9N3OL._AC_SX410_SY308_.jpg"
            }
        ],
        upload_date: current_date
    },
];

ProductsDB.collection
.insertMany(products)
.then((prod) => {
    console.log(prod);
})
.catch(({error}) => {
    console.log(error);
});



