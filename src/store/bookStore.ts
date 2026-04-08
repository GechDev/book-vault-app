import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Book, BookStore } from '@/types'

export const useBookStore = create<BookStore>()(
  persist(
    (set, get) => ({
      vault: [],
      
      addToVault: (book: Book) => {
        const { vault } = get()
        const exists = vault.some(item => item.id === book.id)
        
        if (!exists) {
          set({ 
            vault: [...vault, { ...book, isRead: false }] 
          })
        }
      },
      
      removeFromVault: (id: string) => {
        set((state) => ({
          vault: state.vault.filter(book => book.id !== id)
        }))
      },
      
      toggleRead: (id: string) => {
        set((state) => ({
          vault: state.vault.map(book =>
            book.id === id 
              ? { ...book, isRead: !book.isRead }
              : book
          )
        }))
      },
      
      isInVault: (id: string) => {
        const { vault } = get()
        return vault.some(book => book.id === id)
      },
    }),
    {
      name: 'book-vault-storage',
    }
  )
)
