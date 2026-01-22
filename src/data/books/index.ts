import ajurrumiyyah from "./ajurrumiyyah.json"
import qawaidNahwiyyah from "./qawaid-nahwiyyah.json"
import type { Book } from "../../types/book";


export const books = [
    ajurrumiyyah,
    qawaidNahwiyyah
] as Book[];

export const getBookById = (id?: string) =>
  books.find(b => b.id === id)
