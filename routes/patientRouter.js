const express = require('express');
const controller = require('../controller/patientController');
const router = express.Router();
router.post('/addPatient',controller.addPatient);
router.post('/updatePatient',controller.updatePatient);
router.delete('/deletePatient',controller.deletePatient);
module.exports=router;