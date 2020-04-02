import database from '../models'

class AuthorController {

	static async getAllAuthors(req, res) {
		try {
			const allAuthors = await database.Authors.findAll()
			return res.status(200).send(allAuthors)
		} catch (error) {
			return res.status(500).send(error.message);
		}
	}

	static async addAuthor(req, res) {
		//conferir se não há jeito melhor de fazer esse tratamento
		if (!req.body.name || typeof req.body.active != "boolean" || !req.body.email) {
			return res.status(400).send('faltam informações')
		}
		const newAuthor = req.body
		console.log(newAuthor)
		try {
			const createdAuthor = await database.Authors.create(newAuthor)
			return res.status(201).json(createdAuthor)
		} catch (error) {
			console.log('caiu no erro')
			return res.status(400).json(error.message);
		}
	}	
}

export default AuthorController