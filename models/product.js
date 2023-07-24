const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: { type: Number, required: true, min: 5, max: 10000 },
  discountPercentage: Number,
  rating: {
    type: String,
    min: [0, "min rating"],
    max: [5, "max rating"],
    default: 0,
  },
  stock: { type: Number },
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

exports.Product = new mongoose.model("Product", productSchema);
