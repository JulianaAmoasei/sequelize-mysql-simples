import database from '../models'

class QuotesController {

	static async getAllQuotes(req, res) {
		try {
			const allQuotes = await database.Quotes.findAll()
			return res.status(200).send(allQuotes)
		} catch (error) {
			return res.status(500).send(error.message);
		}
	}

	static async addQuote(req, res) {
		//conferir se não há jeito melhor de fazer esse tratamento
		if (!req.body.text || !req.body.category) {
			return res.status(400).send('faltam informações')
		}
		const newQuote = req.body
		console.log(newQuote)
		try {
			const createdQuote = await database.Quotes.create(newQuote)
			return res.status(201).json(createdQuote)
		} catch (error) {
			// console.log('caiu no erro', error)
			return res.status(400).json(error.message);
		}
	}	
}

export default QuotesController