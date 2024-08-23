const mongooose=require('mongoose');
const Medicine = require('../models/medicine');
async function addMedicine(data){
        const medicine=new Medicine(data);
        const medicineDetails=await medicine.save();
        return medicineDetails;
}
async function updateMedicine(data){
    const medicine=await Medicine.findByIdAndUpdate(data._id,data);
    return "update successfully";
}
async function deleteMedicineById(data){
    const medicine=await Medicine.findByIdAndDelete(data._id);
    if (medicine){
        return "Deleted successfully";
    }
    else{
        return "id was wrong ,please give the valid id";
    }
}
module.exports={addMedicine,updateMedicine,deleteMedicineById};