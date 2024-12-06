const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Word = require('./models/words');
const seedDatabase = require('./seed');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Endpoint para obter uma palavra aleatória
app.get('/random-word', async (req, res) => {
    const wordRandom = await Word.aggregate([{ $sample: { size: 1 } }]);
    res.json(wordRandom);
});

mongoose.connect('mongodb://localhost:27017/word_guess_game')
    .then(async () => {
        app.listen(port);
        console.log(`Servidor rodando na porta ${port}`);
        console.log("Conexão estabelecida com o banco!");
        await seedDatabase();
    })
    .catch(err => {
        console.log("Erro ao conectar com o banco.");
        console.log(err);
    });