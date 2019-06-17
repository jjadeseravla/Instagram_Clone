const model = require('./model');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = {
  login: (req, res) => {
    model.findOne({ email: req.body.email }, (err, user) => {

      if(err) {
        return res.status(500).send({ msg: err.message });
      }

      if(!user) {
        return res.status(404).send({ msg: 'User not found' });
      }

      console.log(req.body.email, req.body.password);

      user.comparePassword(req.body.password, (err, isMatch) => {
        if(err) {
          return res.status(500).send({ msg: err.message });
        }

        if(isMatch) {
          let token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 });
            res.status(200).send({ auth: true, token });
            return;
        }
        
          res.status(500).send({ auth: false, msg: 'Passwords did not match' });
      });
    })
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
      res.status(200).send({ msg: 'Register success', user_id: result._id });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ msg: 'Register not success' });
     })
  }
}
