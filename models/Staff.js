const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const staffSchema = new Schema({
    firstName:String,
    lastName:String,
    role:String,
    email:String,
    Gender:String,
    mobileNumber:String,
    address:String,
    NIC:String,
    dateOfBirth:String,
    password:String,
    confirmPassword:String

});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;