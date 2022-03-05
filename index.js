// arquivo/index.js

const express = require('express')

const { User } = require('./models')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({message: "teste"}));

app.post('/user', async (req, res) => {

  const { name } = req.body;

  const user = await User.create({ name });

  return res.status(201).json(user);
});

app.listen(port, () => console.log(`Servidor online na porta ${port}`));