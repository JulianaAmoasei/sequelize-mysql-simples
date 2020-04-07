import express from 'express';
// import bodyParser from 'body-parser';
import routes from './routes/index';

const app = express();
const port = 3500;

routes(app);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`App rodando na porta ${port}`));

export default app;
