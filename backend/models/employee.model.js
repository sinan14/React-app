const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empid: {type: String, required: true},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    designation: {type: String,required: true},
    department:{type: String, required:true},
    salary:{type:Number, required:true}
}, {
    timestamps: true
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;