import { useState } from 'react'
import { useBookStore } from '../store/bookStore'
import { BookCard } from '../components/BookCard'
import { Filter, BookOpen, CheckCircle } from 'lucide-react'

interface VaultProps {
  setCurrentPage: (page: 'dashboard' | 'browse' | 'vault') => void
}

export function Vault({ setCurrentPage }: VaultProps) {
  const { vault } = useBookStore()
  const [filterBy, setFilterBy] = useState<'all' | 'read' | 'unread'>('all')
  
  const filteredBooks = vault.filter(book => {
    if (filterBy === 'all') return true
    if (filterBy === 'read') return book.isRead
    if (filterBy === 'unread') return !book.isRead
    return true
  })

  const readBooks = vault.filter(book => book.isRead).length
  const unreadBooks = vault.length - readBooks

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Book Vault</h1>
        <p className="text-gray-600">Manage your personal book collection</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-500 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{vault.length}</p>
              <p className="text-sm text-gray-600">Total Books</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-500 rounded-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{readBooks}</p>
              <p className="text-sm text-gray-600">Books Read</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-yellow-500 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{unreadBooks}</p>
              <p className="text-sm text-gray-600">To Read</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      {vault.length > 0 && (
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value as 'all' | 'read' | 'unread')}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Books ({vault.length})</option>
            <option value="read">Read ({readBooks})</option>
            <option value="unread">Unread ({unreadBooks})</option>
          </select>
        </div>
      )}

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} variant="vault" />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <BookOpen className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {vault.length === 0 
              ? "Your vault is empty" 
              : filterBy === 'read' 
                ? "No read books yet" 
                : "No unread books"
            }
          </h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto text-lg">
            {vault.length === 0
              ? "Start building your collection by browsing our curated selection of books."
              : filterBy === 'read'
                ? "You haven't marked any books as read yet."
                : "You've read all your books! Time to add more to your collection."
            }
          </p>
          {vault.length === 0 && (
            <button
              onClick={() => setCurrentPage('browse')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Browsing Books
            </button>
          )}
        </div>
      )}
    </div>
  )
}
