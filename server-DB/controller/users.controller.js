const User = require('../model/users.model');



//get user details
exports.getUserById =(req,res)=>{
  User.findOne({_id:req.params.userId},(err,data)=>{
    if(!err){
      console.log(data);
      res.status(200).json(data);
    }else{
      console.log(err);
      res.json(err);
    }
  })
}

