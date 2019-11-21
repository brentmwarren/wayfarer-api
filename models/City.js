const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CitySchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, 'City name is required'],
  },
  photo: String,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'City'
}],

})

const City = mongoose.model('City', CitySchema);

module.exports = City;



// not sure if im referencing the posts properly since this is the same as my user model
// how can i solved this? 