const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/users', (req, res) => {
  res.json([]);
});


app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Open http://127.0.0.1:${port}`)
});