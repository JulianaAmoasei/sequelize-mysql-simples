import database from '../models'
import AuthorService from '../services/AuthorService'

class AuthorsController {

  static async getAllAuthors(req, res) {
    try {
      const allAuthors = await AuthorService.getAllAuthors()
      if (allAuthors.length > 0) {
				const resObj = {
					status: 200,
					message: 'Lista de autores',
					data: allAuthors
				}
				return res.status(200).json(resObj)
      } else {
        return res.status(204).json('Não há autores na lista')
      }
    } catch (error) {
			return res.status(500).json(error.message)
		}
  }

	static async addAuthor(req, res) {
		//conferir se não há jeito melhor de fazer esse tratamento
		if (!req.body.name || typeof req.body.active != "boolean" || !req.body.email) {
			return res.status(400).json({ message: 'faltam informações' })
		}
		const newAuthor = req.body
		console.log(newAuthor)
		try {
			const createdAuthor = await database.Authors.create(newAuthor)
			return res.status(201).json(createdAuthor)
		} catch (error) {
			console.log('caiu no erro', error)
			return res.status(500).json(error.message);
		}
	}

  static async getAuthor(req, res) {

		const { id } = req.params
		console.log('parâmetro id', id)

    if (!Number(id)) {
			return res.status(400).json({ message: 'Favor inserir parâmetro válido' })
    }

    try {
      const oneAuthor = await database.Authors.findOne({
				where: { id: Number(id) }
			})
      if (!oneAuthor) {
				return res.status(204).json({ message: `Não encontrado autor com id ${id}` })
      } else {
				return res.status(200).json(oneAuthor)
			}
    } catch (error) {
			return res.status(500).json(error.message);
    }
	}
	
	static async updateAuthor(req, res) {

		const newAuthorInfo = req.body
		const { id } = req.params
		
    try {
      const oneAuthor = await database.Authors.findOne({ where: { id: Number(id) } })
      if (oneAuthor) {
				await database.Authors.update(newAuthorInfo, { where: { id: Number(id) } })
				return res.status(200).json(await database.Authors
					.findOne({ where: { id: Number(id) } }))
      } else {
				return res.status(204).json({ message: `Não encontrado autor com id ${id}` })
			}
    } catch (error) {
			return res.status(500).json(error.message);
    }		
	}

	static async deleteAuthor(req, res) {

		const { id } = req.params

    try {
			const authorToDelete = await database.Authors.findOne({ where: { id: Number(id) } })

      if (authorToDelete) {
        await database.Authors.destroy({ where: { id: Number(id) } })
        return res.status(200).json({ message: `registro nome: ${authorToDelete.name} - deletado` })
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
	}
}

export default AuthorsController