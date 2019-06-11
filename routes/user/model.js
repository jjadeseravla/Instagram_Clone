const mongoose = require('mongoose');
const bcypt = require('bcrypt');

const userSchema = mongoose.Schema({
  forename: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  account_created: {
    type: String,
    default: Date.now()
  }
});

const userModel = mongoose.model('user', userSchema);

userSchema.pre('save', function (next) {
  let user = this;

  if (!user.isModified('password')) return next();

  bcrypt.getSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err) return next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callBack) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return callBack(err);
    callBack(null, isMatch);
  });
}

module.exports = userModel;
