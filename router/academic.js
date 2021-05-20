const router = require('express').Router();
const { createAcademic, getAcademic } = require("../controllers/academic");
const { check } = require('express-validator');
const authenticate = require('../middleware/authenticate')


router
    .route('/')
    .post(authenticate, createAcademic)
    .get(authenticate, getAcademic)


module.exports = router;