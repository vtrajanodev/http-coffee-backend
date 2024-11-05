const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5173'
}));

app.get('/api/coffees', (req, res) => {
  const coffees = [
    { id: 1, name: 'Expresso Tradicional', price: 4.00 },
    { id: 2, name: 'Expresso Americano', price: 7.90 },
    { id: 3, name: 'Expresso Cremoso', price: 9.90 },
  ];
  res.status(200).json({ coffees });
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});

app.get('/api/coffees', (req, res) => {
  const coffees = [
    { id: 1, name: 'Expresso Tradicional', price: 4.00 },
    { id: 2, name: 'Expresso Americano', price: 7.90 },
    { id: 3, name: 'Expresso Cremoso', price: 9.90 },
  ];
  res.status(200).json({ coffees });
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
