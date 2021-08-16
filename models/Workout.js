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
    type: Integer
  },
  weight:{
    type: Double
  },
  reps:{
    type: Integer
  },
  sets:{
    type: Integer
  },
  date: {
    type: Date,
    default: Date.now
  }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
