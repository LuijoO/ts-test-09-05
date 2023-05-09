import { BookEntry, NonSensitiveInfoBookEntry, newBookEntry } from '../types'
import bookData from './books.json'

const books: Array<BookEntry> = bookData as Array<BookEntry>

export const getEntries = (): BookEntry[] => books

export const findById = (id: number): NonSensitiveInfoBookEntry | undefined => {
  const entry = books.find(d => d.id === id)
  if (entry != null) {
    const { description, ...restOfBook } = entry
    return restOfBook
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoBookEntry[] => {
  return books.map(({id, date, category, rate}) => {
    return {
      id,
      date,
      category,
      rate
    }
  })
}

export const addEntry = (newBookEntry: newBookEntry): BookEntry => {
  const newBook= {
    id: Math.max(... books.map(d => d.id)) + 1,
    ... newBookEntry
  }

  books.push(newBook)
  return newBook
}

