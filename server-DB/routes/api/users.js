
var express = require('express');
const router = express.Router();
const User = require('../../model/users.model');

router.post('/userData', (req, res) => {
  console.log(req.body);
  const user = new User()
  user.firstName = req.body.firstName;
  user.middleName = req.body.middleName;
  user.lastName = req.body.lastName;
  user.birthday = req.body.birthday;
  user.email = req.body.email;
  user.communicationEmail = req.body.communicationEmail;
  user.interests = req.body.interests;
  user.moderate = req.body.moderate;
  user.growth = req.body.growth;
  user.agGrowth = req.body.agGrowth;
  user.clientAge = req.body.clientAge;
  user.websiteLink = req.body.websiteLink;
  user.tactics = req.body.tactics;
  user.facebook = req.body.facebook;
  user.twitter = req.body.twitter;
  user.linkedIn = req.body.linkedIn;
  user.save((err, data) => {
    if (!err) {
      console.log(data);
      res.send({ data: "record inserted" });
    }
    else {
      console.log(err);
      res.send(err);
    }
  })
});


/* GET users listing. */
router.get('/userData', (req, res) => {
  User.find({}, (err, data) => {
    if (!err) {
      console.log(data);
      res.status(200).json(data);
    } else {
      console.log(err);
      res.json(err);
    }
  })
});

module.exports = router;
