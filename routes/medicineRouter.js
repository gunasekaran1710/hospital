const express = require('express');
const controller = require('../controller/medicineController');
const router = express.Router();
router.post('/addMedicine',controller.addMedicine);
router.post('/updateMedicine',controller.updateMedicine);
router.delete('/deleteMedicine',controller.deleteMedicine);
module.exports=router;