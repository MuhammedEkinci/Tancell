const mongoose = require("mongoose");
require('dotenv').config();

const ProductsDB = require("../models/ProductsDB");

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
});


products = [
    {
        coverImage: "https://m.media-amazon.com/images/I/712isFzTiLL._AC_SX480_SY360_.jpg",
        coverImageAlt: "new-product1",
        productName: "Tancell Tempered Glass Screen Protector - Compatible with iPhone 13 Mini 5.4 Inch 0.33 mm",
        category: "Iphone",
        productType: "2.5D-Tempered-Glass",
        url: "#/view-product/",
        price: 10.99,
        amazonLink: "https://www.amazon.com/Tancell-Tempered-Glass-Screen-Protector/dp/B09GN3C6WX?ref_=ast_sto_dp&th=1&psc=1",
        aboutThisItem: "WHY JAPANESE TEMPERED GLASS SCREEN PROTECTOR!/WORKS For iPhone 13 Mini 5.4 Inch Display Screen 2021, 0.33 MM Tempered Glass Screen Protector made by 9H Premium Japan Asahi Glass Material./Featuring maximum protection from scratches, scrapes, and bumps./Japan Glue: Nano-electrostatic automatic adsorption technology won't fall off, no bubbles and no residue when removed./Japan surface coating technology: 99.99% High Definition, always as shiny as new device./With Hydrophobic and Oleo phobic coating to reduce sweat and reduce fingerprints. 99.99% transparency, features a Nano-sized high definition material that effectively reduces reflections from both sunlight and artificial lighting./It is 100% brand new, Precise laser cut tempered glass, exquisitely polished,2.5D rounded edges gets its corner reinforced, sticks tightly on the edges and corners, providing edge-to-edge protection from water, oil, fingerprint, or daily scratch. Resists scratches up to 9H. Effectively protect your device from unwanted scuffs and scratches by knife, keys and some other hard substances, or accidental damage./Military Grade Protection: Up to an industry-leading glass strength of 9H hardness, the military grade explosion-proof protector protect your phone’s screen from accidental drops, scratches and other impacts. The oleo-phobic layer resists smudges and fingerprints to maintain the HD clarity of your display. /Compatible with any case ! The Tempered glass does not cover the entire screen. HD ultra-clear rounded glass for iPhone 13 Mini is 99.99% touch-screen accurate. ''Delicate Touch'' feel and promises full compatibility with touch screen sensitivity, but also ensure you the original original screen brightness and image quality. /Easy Installation with the upgraded auto-align design, the whole installation becomes quick and fun.Follow the guidlenss instraction maybe 10 seconds, 3 steps, and done! Thanks to Japanese adhesive nearly erase all bubbles and dust. the iPhone 13 Mini' tempered glass screen protector like an invisible guard, glossy and strong. /Your eyes don't suffer if you spend hours glued to your phone. Enjoy your time with your phone.",
        gallery_images: [
            {
                imageURL: "https://m.media-amazon.com/images/I/41LLC5P+YdL._AC_SR38,50_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/41eCb7PZIdL._AC_SR38,50_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/41LA5ZOCjqL._AC_SR38,50_.jpg"
            }
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        descriptionGallery: [
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/61e91iHu9UL._AC_SX480_SY360_.jpg"
            },
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/61CR15YRcoL._AC_SX480_SY360_.jpg"
            },
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/81fbn0Dw10L._AC_SX480_SY360_.jpg"
            }
        ]
    },
    {
        coverImage: "https://m.media-amazon.com/images/I/712isFzTiLL._AC_SX480_SY360_.jpg",
        coverImageAlt: "new-product2",
        productName: "Tancell Iphone phone case",
        category: "Iphone",
        productType: "Phone-Case",
        url: "#/view-product/",
        price: 12.99,
        amazonLink: "https://www.amazon.com/Tancell-Tempered-Glass-Screen-Protector/dp/B09GN3C6WX?ref_=ast_sto_dp&th=1&psc=1",
        aboutThisItem: "WHY JAPANESE TEMPERED GLASS SCREEN PROTECTOR!/WORKS For iPhone 13 Mini 5.4 Inch Display Screen 2021, 0.33 MM Tempered Glass Screen Protector made by 9H Premium Japan Asahi Glass Material./Featuring maximum protection from scratches, scrapes, and bumps./Japan Glue: Nano-electrostatic automatic adsorption technology won't fall off, no bubbles and no residue when removed./Japan surface coating technology: 99.99% High Definition, always as shiny as new device./With Hydrophobic and Oleo phobic coating to reduce sweat and reduce fingerprints. 99.99% transparency, features a Nano-sized high definition material that effectively reduces reflections from both sunlight and artificial lighting./It is 100% brand new, Precise laser cut tempered glass, exquisitely polished,2.5D rounded edges gets its corner reinforced, sticks tightly on the edges and corners, providing edge-to-edge protection from water, oil, fingerprint, or daily scratch. Resists scratches up to 9H. Effectively protect your device from unwanted scuffs and scratches by knife, keys and some other hard substances, or accidental damage./Military Grade Protection: Up to an industry-leading glass strength of 9H hardness, the military grade explosion-proof protector protect your phone’s screen from accidental drops, scratches and other impacts. The oleo-phobic layer resists smudges and fingerprints to maintain the HD clarity of your display. /Compatible with any case ! The Tempered glass does not cover the entire screen. HD ultra-clear rounded glass for iPhone 13 Mini is 99.99% touch-screen accurate. ''Delicate Touch'' feel and promises full compatibility with touch screen sensitivity, but also ensure you the original original screen brightness and image quality. /Easy Installation with the upgraded auto-align design, the whole installation becomes quick and fun.Follow the guidlenss instraction maybe 10 seconds, 3 steps, and done! Thanks to Japanese adhesive nearly erase all bubbles and dust. the iPhone 13 Mini' tempered glass screen protector like an invisible guard, glossy and strong. /Your eyes don't suffer if you spend hours glued to your phone. Enjoy your time with your phone.",
        gallery_images: [
            {
                imageURL: "https://m.media-amazon.com/images/I/41LLC5P+YdL._AC_SR38,50_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/41eCb7PZIdL._AC_SR38,50_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/41LA5ZOCjqL._AC_SR38,50_.jpg"
            }
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        descriptionGallery: [
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/61e91iHu9UL._AC_SX480_SY360_.jpg"
            },
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/61CR15YRcoL._AC_SX480_SY360_.jpg"
            },
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/81fbn0Dw10L._AC_SX480_SY360_.jpg"
            }
        ]
    },
    {
        coverImage: "https://m.media-amazon.com/images/I/712isFzTiLL._AC_SX480_SY360_.jpg",
        coverImageAlt: "new-product2",
        productName: "Tancell Iphone phone case",
        category: "Iphone",
        productType: "3D-Edge-To-Edge",
        url: "#/view-product/",
        price: 12.99,
        amazonLink: "https://www.amazon.com/Tancell-Tempered-Glass-Screen-Protector/dp/B09GN3C6WX?ref_=ast_sto_dp&th=1&psc=1",
        aboutThisItem: "WHY JAPANESE TEMPERED GLASS SCREEN PROTECTOR!/WORKS For iPhone 13 Mini 5.4 Inch Display Screen 2021, 0.33 MM Tempered Glass Screen Protector made by 9H Premium Japan Asahi Glass Material./Featuring maximum protection from scratches, scrapes, and bumps./Japan Glue: Nano-electrostatic automatic adsorption technology won't fall off, no bubbles and no residue when removed./Japan surface coating technology: 99.99% High Definition, always as shiny as new device./With Hydrophobic and Oleo phobic coating to reduce sweat and reduce fingerprints. 99.99% transparency, features a Nano-sized high definition material that effectively reduces reflections from both sunlight and artificial lighting./It is 100% brand new, Precise laser cut tempered glass, exquisitely polished,2.5D rounded edges gets its corner reinforced, sticks tightly on the edges and corners, providing edge-to-edge protection from water, oil, fingerprint, or daily scratch. Resists scratches up to 9H. Effectively protect your device from unwanted scuffs and scratches by knife, keys and some other hard substances, or accidental damage./Military Grade Protection: Up to an industry-leading glass strength of 9H hardness, the military grade explosion-proof protector protect your phone’s screen from accidental drops, scratches and other impacts. The oleo-phobic layer resists smudges and fingerprints to maintain the HD clarity of your display. /Compatible with any case ! The Tempered glass does not cover the entire screen. HD ultra-clear rounded glass for iPhone 13 Mini is 99.99% touch-screen accurate. ''Delicate Touch'' feel and promises full compatibility with touch screen sensitivity, but also ensure you the original original screen brightness and image quality. /Easy Installation with the upgraded auto-align design, the whole installation becomes quick and fun.Follow the guidlenss instraction maybe 10 seconds, 3 steps, and done! Thanks to Japanese adhesive nearly erase all bubbles and dust. the iPhone 13 Mini' tempered glass screen protector like an invisible guard, glossy and strong. /Your eyes don't suffer if you spend hours glued to your phone. Enjoy your time with your phone.",
        gallery_images: [
            {
                imageURL: "https://m.media-amazon.com/images/I/41LLC5P+YdL._AC_SR38,50_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/41eCb7PZIdL._AC_SR38,50_.jpg"
            },
            {
                imageURL: "https://m.media-amazon.com/images/I/41LA5ZOCjqL._AC_SR38,50_.jpg"
            }
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        descriptionGallery: [
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/61e91iHu9UL._AC_SX480_SY360_.jpg"
            },
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/61CR15YRcoL._AC_SX480_SY360_.jpg"
            },
            {
                descriptionImageURL: "https://m.media-amazon.com/images/I/81fbn0Dw10L._AC_SX480_SY360_.jpg"
            }
        ]
    }
];

ProductsDB.collection
.insertMany(products)
.then((prod) => {
    console.log(prod);
})
.catch(({error}) => {
    console.log(error);
});



