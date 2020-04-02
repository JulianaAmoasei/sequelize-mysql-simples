import { Router } from 'express'
import authorController from '../controllers/authorController'
 
const router = Router()
router.get('/', authorController.getAllAuthors)
export default router