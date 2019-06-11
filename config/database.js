const mongoose = require('mongoose');
const config = require('./index');

const db = mongoose.connect(config.mongo_uri, { userNewUrlParser: true })
  .then(() => console.log('Connected to db'))
  .catch((err) => console.log("Error occured", err));

module.exports = db;
