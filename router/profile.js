const router = require('express').Router();
const { createProfile, getProfile } = require("../controllers/profile");
const { check } = require('express-validator');
const authenticate = require('../middleware/authenticate')


router
    .route('/')
    .post(authenticate, createProfile)
    .get(authenticate, getProfile)




module.exports = router;