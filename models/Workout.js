const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type:String,
  name:String,
  duration:Ineteger,
  weight:Ineteger,
  reps:Ineteger,
  sets:Ineteger

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
