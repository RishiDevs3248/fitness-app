const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const studentModel = new Schema({
  email : String,
  password : String,
});

module.exports = mongoose.model('studentModel',studentModel); 