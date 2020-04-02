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
}

export default AuthorController