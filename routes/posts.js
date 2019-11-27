const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//PATH = /api/v1/posts

//GET All Posts
router.get('/', ctrl.posts.showAll);

// router.get('/:id', ctrl.posts.show);
router.get('/:id', ctrl.posts.show);

// ADD POST
router.post('/', ctrl.posts.addPost);

module.exports = router;