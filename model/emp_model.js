const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emp_Schema = new Schema({
    id: {type: String},
    emp_name: {type: String},
    emp_salary: {type: String},
    emp_age: {type: String},
    profile_image: {type:String},
});

module.exports = mongoose.model('emp', emp_Schema);