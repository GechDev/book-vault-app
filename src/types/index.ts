export interface Book {
  id: string
  title: string
  author: string
  coverImage: string
  isRead?: boolean
}

export interface BookStore {
  vault: Book[]
  addToVault: (book: Book) => void
  removeFromVault: (id: string) => void
  toggleRead: (id: string) => void
  isInVault: (id: string) => boolean
}
