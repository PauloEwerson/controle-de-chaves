const express = require('express');
const dotenv = require('dotenv');
const chavesRouter = require('./routes');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/chaves', chavesRouter);

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => console.log(`Controle de Chaves on na porta ${PORT}`));