const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const { signUpRouter } = require('./routes/signUp');
const { loginRouter } = require('./routes/logIn');
const { userRouter } = require('./routes/user');
const { nbaRouter } = require('./routes/nba');

app.use(cors());

app.use(express.json());

app.use('/signup', signUpRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/nba', nbaRouter);

app.get('/', (req, res) => res.status(200).json({ message: 'Running Server Nba Records' }));

app.listen(port, () => console.log(`Servidor online na porta ${port}`));
