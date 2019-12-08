const bodyParser = require('body-parser')
const express = require('express');
const mysql      = require('mysql');

const app = express();
// const connection = mysql.createConnection({
//   host     : process.env.MYSQL_HOST || '127.0.0.1',   // we connect to mysql by its name and port defined in docker-compose.yml (db:3306)
//   port     : '3306',
//   user     : 'root',
//   password : process.env.MYSQL_ROOT_PASSWORD || '12345',
//   database : process.env.MYSQL_DATABASE || 'sweetbooker',
//   charset: 'utf8',
//   dialectOptions: {
//     collate: 'utf8_general_ci',
//   },
// });
// connection.connect();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', (req, res) => res.send({status: 'working'}))

// GET TASKS
app.get('/tasks', (req, res) => {
  res.send({results: 'get tasks'})
  // return connection.query('SELECT * FROM tasks', function (error, results, fields) {
  //   if (error) throw error;
  //   res.send({results})
  // });
});

// ADD TASK
app.post('/task', (req, res) => {
  res.send({results: 'add task'})
  // const { task } = req.body
  // const item  = {name: task};
  // return connection.query('INSERT INTO tasks SET ?', item, function (error, results, fields) {
  //   if (error) throw error;
  //   res.send({result: 'Task was added'});
  // });
});

const HOST = '0.0.0.0'
const PORT = process.env.WEB_PORT || '8000'
app.listen(PORT, HOST, () => {
  console.log(`App listening on port ${HOST}:${PORT}`);
});
console.log('App is successfuly run')
