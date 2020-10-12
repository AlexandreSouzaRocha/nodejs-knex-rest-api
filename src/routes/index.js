const express = require('express');
const userController = require('../controllers/UserController');

const Router = express.Router();

Router.post('/user', userController.postUser);
