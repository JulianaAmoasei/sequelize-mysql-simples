import { Router } from 'express'
import QuotesController from '../controllers/QuotesController'
 
const router = Router()
router.get('/', QuotesController.getAllQuotes)
router.post('/', QuotesController.addQuote)
router.get('/:id', QuotesController.getQuote)
router.put('/:id', QuotesController.updateQuote)
router.delete('/:id', QuotesController.deleteQuote)
export default router