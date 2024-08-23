const mongooose=require('mongoose');
const Patient = require('../models/Patient');
async function addPatient(data){
    if(data.password===data.confirmPassword){
        const patient=new Patient(data);
        const patientDetails=await patient.save();
        return patientDetails;
    }
}
async function updatePatient(data){
    const patient=await Patient.findByIdAndUpdate(data._id,data);
    return "update successfully";
}
async function deletePatientById(data){
    const patient=await Patient.findByIdAndDelete(data._id);
    if (patient){
        return "Deleted successfully";
    }
    else{
        return "id was wrong ,please give the valid id";
    }
}
module.exports={addPatient,updatePatient,deletePatientById};