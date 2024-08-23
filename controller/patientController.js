const repository=require('../repository/patientRepository');
async function addPatient(req,res){
    try{
    const patient=await repository.addPatient(req.body);
    if(patient){
           res.status(200).json({message:"success",statusCode:"200","result":patient});
    }
    else{
        res.status(400).json({message:"please check the confirm password"});
    }
    }
    catch(err){
        res.status(400).json({"message":"error on add patient"});
    }
}
async function updatePatient(req,res){
    try{
        const patient=await repository.updatePatient(req.body);
        res.status(200).json({"message":"success","statusCode":"200","result":patient});
    }
    catch(err){
            res.status(400).json({"message":"error on update patient"});
        }

}
async function deletePatient(req,res){
    try{
        const patient=await repository.deletePatientById(req.body);
        res.status(200).json({"result":patient});
    }
    catch(err){
            res.status(400).json({"message":"error on delete patient"});
        }

}
module.exports={addPatient,updatePatient,deletePatient};