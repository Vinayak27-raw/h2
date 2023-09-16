const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


mongoose.connect("mongodb://127.0.0.1/techdb")
.then(result=>{
    console.log("Connected to MongoDB");
    app.listen(5000,()=>{
        console.log("Server created @ PORT 5000");
    })
})
 