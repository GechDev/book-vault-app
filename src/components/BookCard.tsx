import { Book } from '../types'
import { useBookStore } from '../store/bookStore'
import { Plus, Check, X, Eye, EyeOff } from 'lucide-react'

interface BookCardProps {
  book: Book
  variant?: 'browse' | 'vault'
}

export function BookCard({ book, variant = 'browse' }: BookCardProps) {
  const { addToVault, removeFromVault, toggleRead, isInVault } = useBookStore()
  const inVault = isInVault(book.id)

  const handleAddToVault = () => {
    addToVault(book)
  }

  const handleRemoveFromVault = () => {
    removeFromVault(book.id)
  }

  const handleToggleRead = () => {
    toggleRead(book.id)
  }

  return (
    <div className="book-card group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-xl">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {book.isRead && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Check className="w-3 h-3" />
            <span>Read</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{book.author}</p>
        
        <div className="flex items-center justify-between">
          {variant === 'browse' ? (
            <button
              onClick={handleAddToVault}
              disabled={inVault}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                inVault
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'btn-primary hover:shadow-md'
              }`}
            >
              {inVault ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>In Vault</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Vault</span>
                </>
              )}
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleToggleRead}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  book.isRead
                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {book.isRead ? (
                  <>
                    <EyeOff className="w-4 h-4" />
                    <span>Mark Unread</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    <span>Mark Read</span>
                  </>
                )}
              </button>
              
              <button
                onClick={handleRemoveFromVault}
                className="btn-danger"
              >
                <X className="w-4 h-4" />
                <span>Remove</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
