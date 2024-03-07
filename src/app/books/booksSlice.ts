'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from '@/app/models/Book'

interface BooksState {
  books: Book[]
}

const initialState: BooksState = {
  books: [],
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload)
    },
    addMultiple: (state, action: PayloadAction<Book[]>) => {
      state.books.push(...action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload)
    },
    clear: (state) => {
      state.books = []
    },
  },
})

export const { add, addMultiple, remove, clear } = booksSlice.actions
export default booksSlice.reducer
