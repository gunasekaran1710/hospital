const mongooose=require('mongoose');
const Staff=require('../models/Staff');
async function registerStaff(data){
    if(data.password===data.confirmPassword){
        const staff=new Staff(data);
        const staffDetails=await staff.save();
        return staffDetails;
    }
}
async function updateStaff(data){
    const staff=await Staff.findByIdAndUpdate(data._id,data);
    if(staff){
    return "update successfully";
    }
}
async function deleteStaffById(data){
    const staff=await Staff.findByIdAndDelete(data._id);
    if (staff){
        return "Deleted successfully";
    }
    else{
        return "id was wrong ,please give the valid id";
    }
}

module.exports={registerStaff,updateStaff,deleteStaffById};