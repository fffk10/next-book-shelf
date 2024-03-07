'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from '@/app/models/Book'

interface BooksState {
  books: Book[] // 書籍リスト
  selectedIds: string[] // 削除対象のidリスト
}

const initialState: BooksState = {
  books: [],
  selectedIds: [],
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
    addSelectedIds: (state, action: PayloadAction<string[]>) => {
      state.selectedIds = action.payload
    },
    clear: (state) => {
      state.books = []
    },
  },
})

export const { add, addMultiple, addSelectedIds, clear } = booksSlice.actions
export default booksSlice.reducer
