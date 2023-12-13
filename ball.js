const express = require('express');
const app = express();
const port = 3000;



app.get('/greeting', (req, res) => {
  res.send('Hello Stranger!');
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total);
    const tipPercentage = parseFloat(req.params.tipPercentage);
    
    if (isNaN(total) || isNaN(tipPercentage)) {
      res.send('Invalid input. Please provide valid numbers.');
      return;
    }
  
    const tipAmount = (total * tipPercentage) / 100;
    res.send(`Your tip will be: $${tipAmount.toFixed(2)}`);
  });


app.listen(port, () => {
  console.log(`Example server is running at http://localhost:${port}`);
});