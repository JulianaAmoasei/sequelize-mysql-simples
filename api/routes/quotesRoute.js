import QuotesController from '../controllers/QuotesController';

module.exports = app => {
	app
		.get('/quotes', QuotesController.getAllQuotes)
		.post('/quotes', QuotesController.addQuote)
		.get('/quotes/:id', QuotesController.getQuote)
		.put('/quotes/:id', QuotesController.updateQuote)
		.delete('/quotes/:id', QuotesController.deleteQuote)
	};