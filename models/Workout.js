const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type:{
    type: String,
    trim: true,
    required: "Enter a type of workout"
  },
  name:{
    type: String,
    trim: true,
    required: "Enter a name for the workout"
  },
  duration:{
    type: Number
  },
  weight:{
    type: Number
  },
  reps:{
    type: Number
  },
  sets:{
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
