import ajurrumiyyah from "./dars/nahwu/ajurrumiyyah.json"
import alkhasais from "./muthalaah/nahwu/al-khasais.json"

import type { Book } from "../../types/book";


export const books = [
    ajurrumiyyah,
    alkhasais

] as Book[];

export const getBookById = (id?: string) =>
  books.find(b => b.id === id)
