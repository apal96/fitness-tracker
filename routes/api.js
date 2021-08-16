const router = require("express").Router();
const Workout = require("../models/Workout");

router.get("/api/workouts",(req,res) =>{
    // Workout.find
    //get last workout
})
router.put("/api/workouts/ + id,",(req,res)=>{
    //add Exercise
})
router.post("/api/workouts",(req,res)=>{
    //create workout
})
router.get("/api/workouts/range",(req,res)=>{
    //get workouts in range
})
module.exports = router;