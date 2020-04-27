let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    name:String,
    email: String,
    isNeedy:Boolean,
    isDonar:Boolean,
    isVolunteer:Boolean,
    phone:String,
    password:String,
    CNIC:String,
    donation:String
  })
  
  module.exports = mongoose.model('User', userSchema)