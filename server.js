const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  next();
});

app.get('/api/users', (req, res) => {
  res.json([1, 2, 3]);
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Open http://127.0.0.1:${port}`)
});