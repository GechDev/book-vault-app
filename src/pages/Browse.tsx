import { useState } from 'react'
import { availableBooks } from '../data/books'
import { BookCard } from '../components/BookCard'
import { Search, Filter } from 'lucide-react'

interface BrowseProps {
  setCurrentPage: (page: 'dashboard' | 'browse' | 'vault') => void
}

export function Browse({ setCurrentPage }: BrowseProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterBy, setFilterBy] = useState<'all' | 'available'>('all')

  const filteredBooks = availableBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (filterBy === 'all') return matchesSearch
    return matchesSearch
  })

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Books</h1>
        <p className="text-gray-600">Discover amazing books to add to your personal collection</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value as 'all' | 'available')}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Books</option>
            <option value="available">Available</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Found {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''}
          {searchTerm && ` matching "${searchTerm}"`}
        </p>
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} variant="browse" />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No books found</h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  )
}
