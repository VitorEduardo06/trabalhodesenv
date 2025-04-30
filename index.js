const express = require('express');
const app = express();
const port = 3000;

// Rota 1: Página principal
app.get('/', (req, res) => {
  res.send('<h1>Bem-vindo à página principal!</h1>');
});

// Rota 2: Sobre a aplicação
app.get('/sobre', (req, res) => {
  res.send('<h1>Esta é a página sobre da nossa aplicação Node.js!</h1>');
});

// Rota 3: Contato
app.get('/contato', (req, res) => {
  res.send('<h1>Entre em contato conosco!</h1>');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
