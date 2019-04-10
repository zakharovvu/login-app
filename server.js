const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

let allUsers = []

readUsers();
function readUsers() {
  fs.readFile('./users.json', 'utf8', function(err, data) {
    if (err) {
      return;
    }
    allUsers = JSON.parse(data)
  });
}

function writeUsers() {
  fs.writeFile('./users.json', JSON.stringify(allUsers), function (err) {
    if (err) {
      return;
    }
    console.log('Saved!');
  });
}

app.use(express.static('build'));
app.use(bodyParser.text())

app.post('/users', function(req, res){
  res.set('Access-Control-Allow-Origin', '*');
  allUsers.push(JSON.parse(req.body))
  writeUsers();
  res.json({stasus: 'ok'});
});

app.get('/users', function(req, res){
  res.set('Access-Control-Allow-Origin', '*');
  writeUsers();
  res.json(allUsers);
});



app.listen(port, () => {
  console.log(`Open http://127.0.0.1:${port}`)
});