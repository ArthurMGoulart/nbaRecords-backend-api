const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const { userRouter } = require('./routes/user');
const { loginRouter } = require('./routes/login');
const { playerRouter } = require('./routes/player');

app.use(cors());

app.use(express.json());

app.use('/user', userRouter);

app.use('/login', loginRouter);

app.use('/player', playerRouter);

app.get('/', (req, res) => res.status(200).json({ message: 'teste' }));

app.listen(port, () => console.log(`Servidor online na porta ${port}`));
