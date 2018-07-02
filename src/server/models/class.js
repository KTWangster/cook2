const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  time: {
    type: Integer,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

var Class = mongoose.model("Class", ClassSchema);

// Export the Article model
module.exports = Class;