var pgp = require("pg-promise")({});
var connectionstring = "postgres://localhost/shadowdb";
var db = pgp(connectionstring);
module.exports= db;