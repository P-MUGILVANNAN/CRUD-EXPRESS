const express = require('express');
const EmployeeSchema = require('../model/EmployeeSchema');
const router = express.Router();

//====================================== CREATE Operation 
router.post("/Form", (req, res) => {
  console.log("Received data:", req.body); 

  EmployeeSchema.create(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error in posting data: ", err);
      res.status(500).json({ message: "Failed to add employee" });
    });
});


// ====================================== UPDATE Operation
router.put('/Update/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  EmployeeSchema.findByIdAndUpdate(id, updatedData , {new:true})
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error("Error in Updating Employee details: ", err);
    res.status(500).json({error: "Internal server error"});
  });
});


// ====================================== READ Operation
router.get("/Details", (req, res) => {
  
  EmployeeSchema.find()
    .then((data) => {
      console.log('Employee details retrieved sucessfully...');
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error retrieving employee details:", err);
      res.status(500).json({ error: "Internal server error" });
    });
});


// ======================================  DELETE Operation 
router.delete('/Delete/:id', (req,res) => {
  const id = req.params.id;

  EmployeeSchema.findByIdAndDelete(id)
  .then((data) => {
    console.log("Employee details deleted sucessfully...");    
    res.status(200).json(data);
  })
  .catch((err) => {
    console.error("Error deleting employee details:", err);
    res.status(500).json({ error: 'Internal server error '});
  });
});



module.exports = router;

