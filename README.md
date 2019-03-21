# shadowApi
in the command line
npm install in the command line;
navigate to backend folder;
navigate to db folder;
psql -f homework.sql;
navigate back to backend folder;
npm start.

endpoints:
`localhost/3000/users` =list of users {[{user}{user}...]}
`localhost/3000/users/role/:?{role}` = list of users matching role specified
`localhost/3000/users/page/:?{page}`= fetches specified pagfe of list
`localhost/3000/users/limit/:?{number}`= fetches specified number of users
`localhost/3000/users/id/:?`{user_id}= fetches user with matching id