import { Category, Rate } from "./services/enums"

export interface BookEntry {
  id: number,
  date: string,
  category: Category,
  rate: Rate,
  description: string
}

export type NonSensitiveInfoBookEntry = Omit<BookEntry, 'description'>

export type newBookEntry = Omit<BookEntry, 'id'>
