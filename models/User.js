const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  }, 
  picture: {
    type: String,
    default: "https://c4.wallpaperflare.com/wallpaper/618/499/774/smiley-face-background-wallpaper-thumb.jpg"
  },
  currentCity: {
    type: String,
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
}],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;