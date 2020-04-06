import { Router } from 'express';
import AuthorsController from '../controllers/AuthorsController';

const router = Router();
router.get('/', AuthorsController.getAllAuthors);
router.post('/', AuthorsController.addAuthor);
router.get('/:id', AuthorsController.getAuthor);
router.put('/:id', AuthorsController.updateAuthor);
router.delete('/:id', AuthorsController.deleteAuthor);
export default router;
