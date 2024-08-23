const mongoose = require('mongoose');
const Schema = mongoose.Schema;
function parseDate(dateString) {
    const [day, month, year] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`);
  }
const medicineSchema = new Schema({
    medicineName:String,
    expireDate: {
        type: Date,
        required: true,
        set: parseDate 
      },
    manufactureDate: {
        type: Date,
        required: true,
        set: parseDate 
      },
    supplierName:String,
    QTY:Number,
    unitPrice:Number
    })
const Medicine = mongoose.model('Medicine', medicineSchema);
module.exports = Medicine;
