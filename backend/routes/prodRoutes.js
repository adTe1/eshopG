//2) Routes Handles
const express = require('express');
const prodController = require('../controllers/prodController');
//const {getAllTours...} = require('./../controllers/tourController');

const router = express.Router(); //middleware

//router.param('id', prodController.checkID);

router
    .route('/')
    .get(prodController.getAllProducts)
    .post(prodController.createProduct);

router
    .route('/:id')
    .get(prodController.getProduct)
    .patch(prodController.updateProduct)
    .delete(prodController.deleteProduct);

    
module.exports = router;    