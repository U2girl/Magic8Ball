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
  

    app.get('/magic/:question', (req, res) => {
        const question = req.params.question.replace(/%20/g, ' ');
        const responses = [
          "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
          "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
          "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
          "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
          "Don't count on it", "My reply is no", "My sources say no",
          "Outlook not so good", "Very doubtful"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  res.send(`<h1>${question}? ${randomResponse}</h1>`);
});




    const tipAmount = (total * tipPercentage) / 100;
    res.send(`Your tip will be: $${tipAmount.toFixed(2)}`);
  });


app.listen(port, () => {
  console.log(`Example server is running at http://localhost:${port}`);
});