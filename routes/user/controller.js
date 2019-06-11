

const model = require('./model');

module.exports = {
  login: (req, res) => {
    res.status(200).send({ msg: 'Login success' });
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
      res.status(200).send({ msg: 'Register success', user_id: result_id });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({ msg: 'Register not success' });
    })
  }
}
