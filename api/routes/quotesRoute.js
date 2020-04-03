import { Router } from 'express'
import QuotesController from '../controllers/QuotesController'
 
const router = Router()
router.get('/', QuotesController.getAllQuotes)
router.post('/', QuotesController.addQuote)
export default router