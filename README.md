# shadowApi
git clone
git@github.com:sblackstealth/shadowApi.git
In the command line
cd into shadowApi
npm install;
cd to backend folder;
cd to db folder;
assuming you have postgres installed
(if not download and install from https://postgresapp.com/downloads.html)
psql -f homework.sql;
cd back to backend folder;
npm start.

endpoints:
`localhost/3000/users` =list of users {[{user}{user}...]}
`localhost/3000/users/role/:?{role}` = list of users matching role specified
`localhost/3000/users/page/:?{page}`= fetches specified page of list
`localhost/3000/users/limit/:?{number}`= fetches specified number of users
`localhost/3000/users/id/:?`{user_id}= fetches user with matching id