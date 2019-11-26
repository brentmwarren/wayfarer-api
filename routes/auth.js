const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// PATH = /api/v1/auth

router.post('/register', ctrl.auth.register);
router.post('/login', ctrl.auth.login);
router.get('/verify', ctrl.auth.verify);
router.delete('/logout', ctrl.auth.logout);
router.put('/users/edit/:uid', ctrl.auth.updateProfile);

module.exports = router;