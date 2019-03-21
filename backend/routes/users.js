var express = require('express');
var router = express.Router();
var db = require('../db/queries');

/* -----------GET REQUEST----------- */
router.get('/',db.getAllUsers);
router.get('/role/:role',db.getAllUsersInRole);
router.get('/page/:page*?',db.getAllUsersOnPage);
router.get('/limit/:limit*?',db.getLimitedUsers);
router.get('/id/:user_id', db.getSingleUser);
/*------------POST REQUESt---------- */
router.get('/addUser', db.createUser);
/*------------PATCH  REQUESt---------- */
router.get('/editUser/user_id', db.editUser);

module.exports = router;
