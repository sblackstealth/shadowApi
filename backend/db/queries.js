const db = require("./index");

/*----------------------GET REQUEST-----------------------*/

function getSingleUser(req, res, next) {
    db
        .one(
            `SELECT user_id, user_email, family_name, given_name, user_role, sms_user
             FROM users
             WHERE user_id=$1`, req.params.user_id
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}
function getAllUsers(req,res, next) {
    db
        .any(
            `SELECT *
             FROM users`
        )
        .then(data => {
            res.json({users: data});
        })
        .catch(error => {
            res.json(error);
        })
}
function getAllUsersInRole(req,res) {
    db
        .any(
            `SELECT *
             FROM users
             WHERE role=$1`,req.params.role
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}
function getAllUsersOnPage(req, res,next) {
    console.log(req.params)
    db
        .any(
            `SELECT *
             FROM users
             LIMIT 10 OFFSET($1-1)*10`, req.params.page|1
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}
function getLimitedUsers(req,res,next) {
    console.log(req.params.limit)
  
    db
        .any(
            `SELECT *
             FROM users
             LIMIT 
         ` + (Number(req.params.limit)||50)
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}
/*-------------------------POST REQUEST--------------------------*/
function createUser(req,res){
    return db
        .one(
            "INSERT INTO users (user_id, user_email, family_name, given_name, user_role, sms_user )"+
            "VALUES(${user_id}, ${user_email}, ${family_name}, ${given_name}, ${user_role}, ${sms_user} )"+
            "RETURNING user_id",{
                user_email: req.body.user_email,
                family_name:req.body.last_name,
                given_name: req.body.first_name,
                user_role: req.body.role,
                sms_user:req.body.sms_user,
            }
        )
        .then(data => {
            res.json({ user_id: data.user_id });
          })
          .catch(error => {
            res.json(error);
          });
}
/*------------------------------PATCH Request-----------------------------------*/
function editUser(req, res) {

    return db.none(
      `UPDATE users
       SET username=$1, email=$2, famil_name=$3, given_name=$4, user_role=$5, sms_user=$6
       WHERE user_id=${req.params.userID};`,
      [
        req.body.username,
        req.body.email, req.body.first_name,
        req.body.last_name, req.body.imageInput
      ]
    )
    .then(data => {
      res.json("success");
    })
    .catch(error => {
      res.json(error);
    });
  }

  module.exports={
      /* ----------GET REQUEST---------*/
      getSingleUser,
      getAllUsers,
      getAllUsersInRole,
      getAllUsersOnPage,
      getLimitedUsers,
      /* ----------POST REQUEST---------*/
      createUser,
      /* ----------PATCH REQUEST---------*/
      editUser

  };
  