import bodyParser from 'body-parser';
import authors from './authorsRoute'
import quotes from './quotesRoute'

module.exports = app => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/', (req, res) => {res.send('Olá pessoa!')});
  authors(app);
  quotes(app);
};