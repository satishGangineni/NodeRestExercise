var express = require('express');
var router = express.Router();
var Product = require('../Models/ProductModel');


router.get("/products", (req, res) => {
    // Product.find((err,res)=>{
    //     if(result){
    //         res.send(result);
    //     }
    //     else
    //     if(err){
    //         res.send(err);
    //     }

    // // })
    // console.log('inside the call');
    // //console.log(Product.f);
    // Product.find((err, result) => {
    //     res.send(result);
    // })
    Product.find().then(value => {
        res.send(value);
    }).catch((err) => {
        console.log(err);
        res.send(err);
    }
        )
    // //res.send("get products route");
})

router.get("/products/:id", (req, res) => {

    Product.findById(req.params.id).then((result) => {
        res.send(result);
    }).catch((err) => {
        next();
    })
})

router.post("/products", (req, res) => {
    console.log(req.body);
    //var product = new Product(req.body);
    // product.save().then(()=>{
    //     res.send( { message: "posts products route",
    //     name: req.body.name
    //     });
    //     console.log("success");
    Product.create(req.body).then(
        (product) => {
            res.send({
                message: "Product is added!.",
                product: product
            }
            )
        }, (err) => {
            res.status(500).json({ message: "error in saving." })
            console.log("error");
        })




})

router.put("/products/:id", (req, res, next) => {

    Product.findByIdAndUpdate({ _id: req.params.id }, req.body).then((result) => {

        Product.findById(req.params.id).then((result) => {
            res.send(result);
        }).catch((err) => {
            next();
        })
    }).catch((err) => {
        next();
    })
})

router.delete("/products/:id", (req, res, next) => {

    //Method1
    // Product.deleteOne({_id:req.params.id}).then((result)=>{
    //     res.send(result);
    // }).catch((err)=>{
    //     next();
    // })

    Product.findByIdAndDelete({ _id: req.params.id }).then((result) => {
        res.send(result);
    }).catch((err) => {
        next();
    })

    //res.send("from delete route");
})

module.exports = router

