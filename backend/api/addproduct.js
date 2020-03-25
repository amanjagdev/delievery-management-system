const router = require('express').Router()
const mongoose = require('mongoose')
const Product = require('../models/Product')

/*
    @route   GET api/product/test
    @desc    testing
    @access  Public
*/
router.get('/test', (req, res) => {
    res.json({
        msg: 'Route tested api/product/test'
    })
});



/*
    @route   GET api/product/add
    @desc    To get the result for the query
    @access  Public
*/
router.post('/add', (req, res) => {

    //Parameters:
    //  fno
    // productsList{pname,pqty}

    let productsListArray =[];
    console.log(req.params.productsList)
    req.params.productsList.forEach((product) => {
        const temp = {
            product_name: product.pname,
            product_qty: product.pqty,
        }
        productsListArray.push(temp);
    });

    const newProduct = new Product({
        flat_number: req.params.fno,
        product: productsListArray
    })

    newProduct.save()
    .then(product => {
        console.log('ADDED PRODUCT : ', product)
    })
    .catch(err => {
        console.log("ERROR : ", err)
        res.json(err)
    })

});


router.get('/view', (req, res) => {

    Product.find({})
        .then(product => {
            if (!product) {
                res
                    .status(400)
                    .json({
                        err: 'No product found'
                    })
            }
            res.json(product)
        })
        .catch(err => {
            res.status(400).json(err)
        });

});


module.exports = router;