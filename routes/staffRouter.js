const express = require('express');
const controller = require('../controller/staffController');
const router = express.Router();
router.post('/registerStaff',controller.registerStaff);
router.post('/updateStaff',controller.updateStaff);
router.delete('/deleteStaff',controller.deleteStaff);
module.exports=router;