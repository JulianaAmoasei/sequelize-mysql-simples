import database from '../models'

class QuoteController {
	static async getAllQuotes(req, res) {
		try {
			const allQuotes = await database.Quotes.findAll()
			return res.status(200).send(allQuotes)
		} catch (error) {
			return res.status(500).send(error.message);
		}
	}
}

export default QuoteController