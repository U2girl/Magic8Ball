const express = require('express');
const app = express();
const port = 3000;



app.get('/greeting', (req, res) => {
  res.send('Hello Stranger!');
});
app.listen(port, () => {
  console.log(`Example server is running at http://localhost:${port}`);
});