const model = require('./model');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = {
  login: (req, res) => {
    // model.findOne({ email: req.body.email }, (err, user) => {
    //   if(err) throw err;
    //
    //   user.comparePassword(req.body.password, (err, isMatch) => {
    //     if(err) throw err;
    //     if(isMatch) {
    //       let token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 });
    //         res.status(200).send({ msg: 'Login success', token });
    res.status(200).send({ msg: 'Login success'});
    //     } else {
    //       res.status(500).send({ msg: 'Passwords did not match' });
    //     }
    //   });
    // })
  },
  register: (req, res) => {
    
     let newUser = new model({
      forename: req.body.forename,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password
    });

  newUser.save()
    .then(result => {
      console.log(result);
  //    res.status(200).send({ msg: 'Register success', user_id: result_id });
      res.status(200).send({ msg: 'Register success', user_id: "id" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ msg: 'Register not success' });
     })
  }
}
