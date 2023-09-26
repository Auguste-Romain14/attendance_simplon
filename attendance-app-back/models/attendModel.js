const mongoose = require("mongoose");
const { Schema } = mongoose;

const attendSchema = Schema({
  firstName: String,
  lastName: String,
  number: String,
  email: String,
});

const attendModel = mongoose.model("Attendance", attendSchema);

module.exports = attendModel;
