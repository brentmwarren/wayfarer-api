const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = mongoose.Schema({
  title: {
    type: String,
    require: [true, 'Comment title is required'],
  },
  content: {
    type: String,
    require: [true, 'Comment content is required'],
  },

})

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;