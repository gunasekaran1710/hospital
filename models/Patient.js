const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    Gender:String,
    mobileNumber:String,
    address:String,
    NIC:String,
    dateOfBirth:String,
    password:String,
    confirmPassword:String

})
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;