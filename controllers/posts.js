const db = require('../models');

// GET one post
const show = (req, res) => {
    db.Post.findById(req.params.id)
    .populate('author')
    .populate('city')
    .exec((err, foundPost) => {
        if(err) return res.status(500).json({
            status: 500,
            message: err
        });
        res.status(200).json({
            status: 200,
            data: foundPost
        });
    });
};

// GET all posts
const showAll = (req, res) => {
    db.Post.find({})
    .populate('author')
    .populate('city')
    .exec((err, allPosts) => {
        if(err) return res.status(500).json({
            status: 500,
            message: err
        });
        res.status(200).json({
            status: 200,
            data: allPosts
        });
    });
};

const addPost = (req, res) => {
    const postData = {...req.body, author: "5dd9d8df8c7c105a69e62bd3"};
    db.Post.create(postData, (error, createdPost)=>{
        if (error) return console.log(error);
        console.log('Successfully created post');
        db.User.findById(createdPost.author, (err, foundUser) => {
            if (err) return console.log(err);
            foundUser.posts.push(createdPost._id);
            foundUser.save((err, updatedUser) => {
                if (err) return console.log(err);
                res.json({
                    status: 201,
                    data: updatedUser,
                });
            });
        });
    });
};

module.exports = {
    show,
    showAll,
    addPost,
};



