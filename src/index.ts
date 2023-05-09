import express from 'express';
import bookRouter from './routes/books'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!!')
  res.send('pong')
})

app.use('/api/diaries', bookRouter)

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`)
})