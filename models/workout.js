const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  totalDuration: {
    type: Number,
    default: 0
  },

  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [{

    type: {
      type: String,
      trim: true,
      required: "Enter a exercise type"
    },

    name: {
      type: String,
      trim: true,
      required: "Enter a exercise type"

    },

    duration: {
      type: Number,
    },

    weight: {
      type: Number,
    },

    reps: {
      type: Number,
    },

    sets: {
      type: Number,
    },

    distance: {
      type: Number,
    },
    
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
