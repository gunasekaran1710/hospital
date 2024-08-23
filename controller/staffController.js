const repository=require('../repository/staffRepository');
async function registerStaff(req,res){
    try{
    const staff=await repository.registerStaff(req.body);
    if(staff){
           res.status(200).json({"message":"success","statusCode":"200","result":staff});
    }
    else{
        res.status(400).json({message:"please check the confirm password"});
    }
    }
    catch(err){
        res.status(400).json({"message":"error on register staff"});
    }
}
async function updateStaff(req,res){
    try{
        const staff=await repository.updateStaff(req.body);
        if(staff){
        res.status(200).json({"message":"success","statusCode":"200","result":staff});
        }
        else{
            res.status(400).json({message:"un success,id wass wrong please check",statusCode:400});
        }
    }
    catch(err){
            res.status(400).json({"message":"error on update staff"});
        }

}
async function deleteStaff(req,res){
    try{
        const staff=await repository.deleteStaffById(req.body);
        res.status(200).json({"result":staff});
    }
    catch(err){
            res.status(400).json({"message":"error on delete staff"});
        }

}
module.exports={registerStaff,updateStaff,deleteStaff};