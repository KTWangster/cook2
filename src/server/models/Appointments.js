const mongoose = require('mongoose');

const AppointmentsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
  },
  time: {
    type: Number,
  },
  customer: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model("Appointments", AppointmentsSchema);
