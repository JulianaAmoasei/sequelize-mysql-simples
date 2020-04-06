import database from '../models'

class QuotesController {

	static async getAllQuotes(req, res) {
		try {
			const allQuotes = await database.Quotes.findAll()
			return res.status(200).json(allQuotes)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async addQuote(req, res) {
		//conferir se não há jeito melhor de fazer esse tratamento
		if (!req.body.text || !req.body.category) {
			return res.status(400).json({ message: 'faltam informações' })
		}
		const newQuote = req.body
		console.log(newQuote)
		try {
			const createdQuote = await database.Quotes.create(newQuote)
			return res.status(201).json(createdQuote)
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}	

	static async getQuote(req, res) {

		const { id } = req.params

    if (!Number(id)) {
			return res.status(400).json('Favor inserir parâmetro válido')
    }

    try {
      const oneQuote = await database.Quotes.findOne({
				where: { id: Number(id) }
			})
      if (!oneQuote) {
				return res.status(204).json({ message: `Não encontrada frase com id ${id}` })
      } else {
				return res.status(200).json(oneQuote)
			}
    } catch (error) {
			return res.status(500).json(error.message);
    }
	}
	
	static async updateQuote(req, res) {

		const newQuoteInfo = req.body
		const { id } = req.params
		
    try {
      const oneQuote = await database.Quotes.findOne({ where: { id: Number(id) } })
      if (oneQuote) {
				await database.Quotes.update(newQuoteInfo, { where: { id: Number(id) } })
				return res.status(200).json(await database.Quotes
					.findOne({ where: { id: Number(id) } }))
      } else {
				return res.status(204).json(`Não encontrada frase com id ${id}`)
			}
    } catch (error) {
			return res.status(500).json(error.message);
    }		
	}

	static async deleteQuote(req, res) {

		const { id } = req.params

    try {
      if (id) {
        await database.Quotes.destroy({ where: { id: Number(id) } })
        return res.status(200).json(`registro deletado`)
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
	}
}

export default QuotesController