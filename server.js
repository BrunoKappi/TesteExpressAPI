// Importando as dependências
const express = require('express');

// Criando a aplicação do Express
const app = express();

// Configurando as rotas
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

// Rota que recebe parâmetros e os exibe na tela
app.get('/parametros/:nome/:sobrenome', (req, res) => {
    const { nome, sobrenome } = req.params;
    res.send(`Seu nome é ${nome} e seu sobrenome é ${sobrenome}`);
});

// Iniciando o servidor
const PORT = 3000; 
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 