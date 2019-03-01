

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var productsRoutes = require('./routes/productRoutes');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//var constring = "mongodb://test1:test1@customermanager-shard-00-00-okf9d.mongodb.net:27017,customermanager-shard-00-01-okf9d.mongodb.net:27017,customermanager-shard-00-02-okf9d.mongodb.net:27017/test?ssl=true&replicaSet=customermanager-shard-0&authSource=admin&retryWrites=true"

var constring = "mongodb://test1:test123@ds042128.mlab.com:42128/mean_angular6"

mongoose.connect(constring, { useNewUrlParser: true }, (err) => {
    console.log(err)
}, (err) => {
    console.log(err)
});

app.use('/api', productsRoutes);

// app.use((err, req, res, next) => {

//     res.send({ message: err });
//     next();

// })
// app.get("/",(req,res,next)=>{
//     res.send({"name":"johnny"});
// });

// app.use("/products",(req,res,next)=>{
//     res.status(200).json({
//         message:"return products"
//     });
// });

// app.use("/",(req,res,next)=>{
//     res.status(200).json({
//         message:"requests are received! all are done."
//     });
//     next();
// });


app.listen(3000, () => {

    console.log("now listening on 3000");
})
// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:"requests are received!."
//     });
// } );

module.export = app;
