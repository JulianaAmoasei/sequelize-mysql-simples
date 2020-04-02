import { Router } from 'express'
import authorController from '../controllers/authorController'
 
const router = Router()
router.get('/', authorController.getAllAuthors)
router.post('/', authorController.addAuthor)
export default router