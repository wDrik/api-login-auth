const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/api_auth_login', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
