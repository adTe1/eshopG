//const fs = require('fs');
const Product = require('./../models/productModel');

// const products = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// exports.checkID = (req, res, next, val) => {
//     console.log(`Prod id is: ${val}`);
//     if (req.params.id * 1 > products.length){
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         });
//     }
//     next();
// };

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price '
        });
    }
    next();
}

exports.getAllProducts =  async (req, res) => {
     try {
        const products = await Product.find();

        res.status(200).json({
            status: 'success',
            requestedAt: req.requestTime,
             results: products.length,
             data:  {
                products
            }
        });
     } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
     }
   
};

exports.getProduct = async (req, res) => {
    // console.log(req.params);
   // const id = req.params.id *1; // convert to number 
    try{
       const product = await Product.findById(req.params.id);
       // Product.findOne({_id: req.params.id})
       res.status(200).json({
             status: 'success',
             // results: tours.length,
              data:  {
                  product
              }
         });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
    // const products = products.find(el => el.id === id); // find tour

};

exports.createProduct = async  (req, res) => {
    try {
    // const newProduct = new Product({})
    // newProduct.save();
    
    const newProduct = await Product.create(req.body);
    
    res.status(201).json({
        status: 'success',
         data: {
             tour: newProduct
         }   
    });

    }catch (err) {
        console.error(err);
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
    
};

exports.updateProduct = async (req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                product
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.deleteProduct = async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
    
};
