import AuthorService from '../services/AuthorService';
import MessageService from '../services/MessageService';

class AuthorsController {
  static async getAllAuthors(req, res) {
    try {
			const allAuthors = await AuthorService.getAllAuthors();
      if (allAuthors.length > 0) {
				const resObj = new MessageService('success', 200, 'Lista de autores', allAuthors)
        return res.json(resObj.sendMessage());
			};
      return res.status(200).json('Não há autores na lista');
    } catch (error) {
      return res.status(500).json(error.message);
		}
	}

  static async addAuthor(req, res) {
    if (!req.body.name || typeof req.body.active !== 'boolean' || !req.body.email) {
      return res.status(400).json({ message: 'faltam informações' });
    }
    const newAuthor = req.body;
    try {
			await AuthorService.addAuthor(newAuthor);
			return await res.status(201).json(newAuthor);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAuthor(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      return res.status(400).json({ message: 'Favor inserir parâmetro válido' });
    }
    try {
			const oneAuthor = await AuthorService.getAuthor(id);
      if (!oneAuthor) {
        return res.status(200).json({ message: `Não encontrado autor com id ${id}` });
			}
			const resObj = new MessageService('success', 200, 'Autor encontrado', oneAuthor)
			return res.json(resObj.sendMessage());
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateAuthor(req, res) {
		const newAuthorInfo = req.body;
    const { id } = req.params;

		if (!Number(id) || Object.keys(newAuthorInfo).length === 0 && newAuthorInfo.constructor === Object) {
      return res.status(400).json({ message: 'Favor inserir informações válidas' });
    }
    try {
			await AuthorService.updateAuthor(id, newAuthorInfo);
			const updatedAuthor = await AuthorService.getAuthor(id)
				if (!updatedAuthor) {
					return res.status(200).json({ message: `Não encontrado autor com id ${id}` });
				}
				return res.status(200).json(updatedAuthor);	
    } catch (error) {
      return res.status(500).json(error.message);
    }
	}
	
  static async deleteAuthor(req, res) {
		const { id } = req.params;

		if (!Number(id)) {
      return res.status(400).json({ message: 'Favor inserir parâmetros válidos' });
		}
				
    try {
      const authorToDelete = await AuthorService.getAuthor(id);

      if (!authorToDelete) {
				return res.status(200).json({ message: `Não encontrado autor com id ${id}` });
			}
			await AuthorService.deleteAuthor(id);
			return res.status(200).json({ message: `registro nome: ${authorToDelete.name} - deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default AuthorsController;
