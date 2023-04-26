const mongoose = require('mongoose');

 const {Schema} = mongoose;

//lets have scjhema for collection
//building a collection with field and datatype
const User =  new Schema({
  firstName:String,
  middleName:String,
  lastName:String,
  birthday:String,
  email:{
    type: String,
    // unique:true,
    // rewuired:true
  },
  communicationEmail:String,
  interests:String,
  moderate :Number,
  growth:Number,
  agGrowth : Number,
  clientAge : String,
  websiteLink :String,
  tactics : String,
  facebook : String,
  twitter : String,
  linkedIn : String,
  createdBy:String,
  createdOn:{type: Date,default: Date.now},
  updatedBy:String,
  updatedOn:{type: Date,default: Date.now},

})

module.exports = mongoose.model('User',User);