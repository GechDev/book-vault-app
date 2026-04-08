import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Dashboard } from './pages/Dashboard'
import { Browse } from './pages/Browse'
import { Vault } from './pages/Vault'

import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'browse' | 'vault'>(() => {
    // Get initial page from URL
    const path = window.location.pathname
    if (path === '/browse') return 'browse'
    if (path === '/vault') return 'vault'
    return 'dashboard'
  })

  // Update URL when page changes
  const updatePage = (page: 'dashboard' | 'browse' | 'vault') => {
    setCurrentPage(page)
    const url = page === 'dashboard' ? '/' : `/${page}`
    window.history.pushState({}, '', url)
  }

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path === '/browse') setCurrentPage('browse')
      else if (path === '/vault') setCurrentPage('vault')
      else setCurrentPage('dashboard')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard setCurrentPage={updatePage} />
      case 'browse':
        return <Browse setCurrentPage={updatePage} />
      case 'vault':
        return <Vault setCurrentPage={updatePage} />
      default:
        return <Dashboard setCurrentPage={updatePage} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={updatePage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)