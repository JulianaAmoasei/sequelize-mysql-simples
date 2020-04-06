import express from 'express';
import bodyParser from 'body-parser';
import authorsRoute from './routes/authorsRoute';
import quotesRoute from './routes/quotesRoute';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/authors', authorsRoute);
app.use('/quotes', quotesRoute);

// const port = process.env.PORT || 3500
const port = 3500;

app.get('*', (req, res) => res.status(200).send({
  message: 'Olá, esta é a API.',
}));

app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);
});

export default app;
