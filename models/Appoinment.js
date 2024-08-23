const mongoose = require('mongoose');
const Schema = mongoose.Schema;
function parseDate(dateString) {
    const [day, month, year] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`);
  }
  function extractTime(date) {
    const timeString = date.toTimeString().split(' ')[0]; // "HH:MM:SS" format
    return timeString;
  }
const appoinmentSchema = new Schema({
    firstName:String,
    lastName:String,
    NIC:String,
    email:String,
    mobileNumber:Number,
    dateOfBirth:{
        type: Date,
        required: true,
        set: parseDate
    },
    gender:String,
    appoinmentDate: {
        type: Date,
        required: true,
        set: parseDate 
      },
    appoinmentTime:{
        type: Date,
        required: true,
        set: extractTime
    },
    

    })
const Medicine = mongoose.model('Medicine', medicineSchema);
module.exports = Medicine;