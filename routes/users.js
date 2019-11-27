const express = require('express');
const router = express.Router();
const ctrl = require('../controllers')

//PATH = /api/v1/users

router.get('/:id', ctrl.users.show);
//GET Profile by ID

//PUT Update Profile
// router.put('/:id/', ctrl.users.update);
// no need to write update after id/  left over django thoughts

module.exports = router;