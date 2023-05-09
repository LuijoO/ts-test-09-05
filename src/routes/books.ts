import express from 'express';
import * as bookServices from '../services/libraryService'
import toNewBookEntry from '../utils';

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(bookServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const book = bookServices.findById(+req.params.id)
  return (book != null)
    ? res.send(book)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newBookEntry = toNewBookEntry(req.body) 

    const addedBookEntry = bookServices.addEntry(newBookEntry)
  
    res.json(addedBookEntry)
  } catch(e:any) {
    res.status(400).send(e.message)
  }
})

export default router;
