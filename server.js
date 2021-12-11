require('dotenv').config();
const compression = require("compression");
const express = require("express");
const mongoose = require("mongoose");
const ProductsDB = require("./models/ProductsDB");

const app = express();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;

app.use(compression({ filter: shouldCompress }))
 
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
}


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI, 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start the API server
app.listen(PORT, function() {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});



// Route used to get all products
app.get("/api/products", (req, res) => {
  ProductsDB.find({}).then((error, data) => {
    if(error){ 
      return res.send(error)
    } else{
      return res.json(data);
    }
  });
});

//Route to get products by categorie
app.get("/api/products/:category", (req, res) => {
  ProductsDB.find({productType: req.params.category}).then((error, data) => {
    if(error){
      return res.send(error);
    } else{
      return res.json(data);
    }
  })
})