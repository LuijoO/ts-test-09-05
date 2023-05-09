import { newBookEntry } from "./types";
import { Category, Rate } from "./services/enums"

const parseDescription = (descriptionFromReuqest: any): string => {
  if (!isString(descriptionFromReuqest)) {
    throw new Error('Incorrect or missing description')
  }

  return descriptionFromReuqest
}

const parseDate = (dateFromRequest: any): string => {
  if(!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest 
}

const parseCategory = (categoryFromRequest: any): Category => {
  if(!isString(categoryFromRequest || !isCategory(categoryFromRequest))) {
    throw new Error ('incorrect or missing weather')
  }

  return categoryFromRequest
}

const parseRate = (rateFromRequest: any): Rate => {
  if(!isString(rateFromRequest) || !isRate(rateFromRequest)) {
    throw new Error('Incorrect or missing rate')
  }

  return rateFromRequest
}

const isCategory = (param: any): boolean => {
  return Object.values(Category).includes(param)
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isRate = (param: any): boolean => {
  return Object.values(Rate).includes(param)
}

const toNewBookEntry = (object: any): newBookEntry => {
  const newEntry: newBookEntry = {
    description: parseDescription(object.description),
    date: parseDate(object.date),
    category: parseCategory(object.category),
    rate: parseRate(object.rate)
  }
  return newEntry
}

export default toNewBookEntry