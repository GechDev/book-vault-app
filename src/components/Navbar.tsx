import { BookOpen, Home, Library, Search } from 'lucide-react'

interface NavbarProps {
  currentPage: 'dashboard' | 'browse' | 'vault'
  setCurrentPage: (page: 'dashboard' | 'browse' | 'vault') => void
}

export function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900">Book Vault</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setCurrentPage('dashboard')}
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                currentPage === 'dashboard' 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </button>
            
            <button 
              onClick={() => setCurrentPage('browse')}
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                currentPage === 'browse' 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Browse</span>
            </button>
            
            <button 
              onClick={() => setCurrentPage('vault')}
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                currentPage === 'vault' 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Library className="w-4 h-4" />
              <span>My Vault</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
