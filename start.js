const mongoose = require('mongoose');


(async ()=>{
    try {
        await mongoose.connect('mongodb://localhost/emp', {useNewUrlParser: true});
        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log(`Connection error to mongodb. Error is: ${error}`);
    }
})()

require('./model/emp_model')
require('./index.js');