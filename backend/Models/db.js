const mongoose = require('mongoose');

const DB_URL = process.env.MONGO_URI;

mongoose.connect(DB_URL)
    .then(()=>{
        console.log('MongoDB is Connected...');
    }).catch((error)=>{
        console.log('MongoDB Connection Error...',error);
    })