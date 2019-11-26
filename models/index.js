const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = (process.env.MONGO_URI || 3000)

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected Wayfarer...'))
  .catch((err) => console.log(`MongoDB connection error": ${err}`));


module.exports = {
  User: require('./User'),
  City: require('./City'),
  Post: require('./Post'),
  Comment: require('./Comment'),
};

