const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  photo: {
    type: String,
    default: "https://www.layatravelinsurance.ie/etc/clientlibs/aig/pre-quote-widget/pre-quote-widget/images/icon-singletrip-default.png"
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  city: {
    type:Schema.Types.ObjectId,
    ref: 'City'
  },
  content: {
    type: String,
    require: [true, 'Post content is required'],
  },
  postDate: {
    type: Date,
    default: Date.now,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }],
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;