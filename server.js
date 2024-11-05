const express = require('express');
const cors = require('cors');
const app = express();

// Permite requisições da origem específica (se for só local, altere conforme necessário)
app.use(cors({
  origin: 'http://127.0.0.1:5173',  // Apenas sua origem específica
  methods: 'GET, POST, OPTIONS',    // Permite apenas esses métodos
  allowedHeaders: 'Content-Type',   // Permite apenas esse cabeçalho
}));

app.get('/api/coffees', (req, res) => {
  const coffees = [
    { id: 1, name: 'Expresso Tradicional', price: 4.00 },
    { id: 2, name: 'Expresso Americano', price: 7.90 },
    { id: 3, name: 'Expresso Cremoso', price: 9.90 },
  ];
  res.status(200).json({ coffees });
});

// A Vercel geralmente não usa listen, mas por enquanto, caso queira testar localmente
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
