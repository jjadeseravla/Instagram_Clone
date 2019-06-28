const model = require('./model');
const postModel = require('../post/model');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = {
  login: (req, res) => {
    model.findOne({ email: req.body.email }, (err, user) => {

      if(err) {
        return res.status(500).send({ msg: err.message });
      }

      if(!user) {
        return res.send({ auth: false, mailError: true, msg: 'Email not found' });
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
        } else {
          res.send({ auth: false, passError: true, msg: "Password is incorrect"});
        }
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
        let token = jwt.sign({ id: result._id }, config.secret, { expiresIn: 86400 });
          res.status(200).send({ auth: true, token });
    })
    .catch(err => {
      if(err.code == 11000) {

        res.send({ auth: false, msg: "Email already exists" });
        return
        }
        res.send({ auth: false, msg: "Internal server error has occurred"});
     })
  },
  getProfile: (req, res) => {
    let user_id = jwt.decode(req.body.auth_token).id;
    model.findById(user_id)
      .then(user => {
        if(!user) {
          res.send({ success: false, msg: "User not found"});
        }
        console.log(user);
        postModel.find({ user_id: user_id })
          .then(posts => {

            res.send({
              success: true,
              details: {
                display_name: user.forename + ' ' +
                user.surname,
                avatar: user.avatar,
                posts: posts
                }
              })
            })
          });
      },
      saveAvatar: (req, res) =>{
        let user_id = jwt.decode(req.body.auth_token).id;

        model.findById(user_id)
          .then(result => {
            if(!result) {
              res.send({ success: false, msg: "No user was found" });
              return;
            }

            model.update(result, { avatar :req.body.image }, (err) => {
              if(err) {
                  res.send({ success: false, error: "Failed!" });
                  return;
              }
              res.send({ success: true, result: result });

            });
          })
      }
    }
