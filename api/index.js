import express from 'express'
import bodyParser from 'body-parser'
import authorRoute from './routes/authorRoute'
import quoteRoute from './routes/quoteRoute'
 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/authors', authorRoute)
app.use('/quotes', quoteRoute)
 
// const port = process.env.PORT || 3000
const port = 3500
 
app.get('*', (req, res) => res.status(200).send({
  message: 'Olá, esta é a API.'
}))
 
app.listen(port, () => {
	console.log(`Servidor rodando em ${port}`)})
	
	export default app