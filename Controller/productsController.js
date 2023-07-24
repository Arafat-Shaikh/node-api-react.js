const model = require("../models/product");
const Product = model.Product;

exports.postNewproduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save().then((savedDoc) => {
      if (savedDoc) {
        res.status(201).send(savedDoc);
      }
      console.log("savedDoc here" + savedDoc);
    });
  } catch (err) {
    console.log("error here " + err);
    res.status(400).send(err);
  }
};

exports.getAllproducts = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

exports.getproductById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.send(product);
};

exports.replaceproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.send(product);
  } catch (err) {
    console.log(err);
  }
};

exports.updateproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(product);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.deleteproduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOneAndDelete({ _id: id });
    res.send(product);
  } catch (err) {
    console.log(err);
  }
};
