import AuthorsController from '../controllers/AuthorsController';

module.exports = app => {
	app
		.get('/authors', AuthorsController.getAllAuthors)
		.post('/authors', AuthorsController.addAuthor)
		.get('/authors/:id', AuthorsController.getAuthor)
		.put('/authors/:id', AuthorsController.updateAuthor)
		.delete('/authors/:id', AuthorsController.deleteAuthor)
	};