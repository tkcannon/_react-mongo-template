const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/<DataBase Name>', {
  useNewUrlParser: true,
});

module.exports = mongoose.connection;
