const repository=require('../repository/medicineRepository');
async function addMedicine(req,res){
    try{
    const medicine=await repository.addMedicine(req.body);
    res.status(200).json({message:"success",statusCode:"200","result":medicine});
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}
async function updateMedicine(req,res){
    try{
        const medicine=await repository.updateMedicine(req.body);
        res.status(200).json({"message":"success","statusCode":"200","result":medicine});
    }
    catch(err){
            res.status(400).json({error:"error on update medicine", message: err.message});
        }

}
async function deleteMedicine(req,res){
    try{
        const medicine=await repository.deleteMedicineById(req.body);
        res.status(200).json({"result":medicine});
    }
    catch(err){
            res.status(400).json({"message":"error on delete medicine"});
        }

}
module.exports={addMedicine,updateMedicine,deleteMedicine};