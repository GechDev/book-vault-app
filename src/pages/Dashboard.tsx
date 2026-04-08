import { useBookStore } from '../store/bookStore'

interface DashboardProps {
  setCurrentPage: (page: 'dashboard' | 'browse' | 'vault') => void
}

export function Dashboard({ setCurrentPage }: DashboardProps) {
  const vault = useBookStore((state) => state.vault)
  
  // Calculate derived statistics (as recommended in requirements)
  const totalBooks = vault.length
  const booksRead = vault.filter(book => book.isRead).length
  const unreadBooks = totalBooks - booksRead
  const progress = totalBooks > 0 ? Math.round((booksRead / totalBooks) * 100) : 0

  const readingGoal = {
    current: booksRead,
    target: 20
  }

  const recentActivity = vault.slice(0, 5).map(book => ({
    id: book.id,
    title: book.title,
    author: book.author,
    date: "Recently added",
    status: book.isRead ? "completed" : "reading",
    cover: book.coverImage
  }))

  const goalPercentage = (readingGoal.current / readingGoal.target) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      {/* Subtle Pattern Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10 relative z-10">
        
        {/* Hero Section */}
        <div className="relative">
          {/* Animated Background Blobs */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="relative space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Reading Streak • 3 days</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gray-900">Welcome back,</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Fellow Reader
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Your literary sanctuary awaits. Track your journey, discover worlds between pages, and celebrate every chapter completed.
            </p>
          </div>
        </div>

        {/* Stats Grid with 3D Effect */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Books", value: totalBooks, icon: "", color: "from-blue-500 to-blue-600", gradient: "from-blue-50 to-blue-100", border: "border-blue-200", textColor: "text-blue-600", trend: totalBooks > 0 ? "Growing!" : "Start building" },
            { label: "Books Read", value: booksRead, icon: "", color: "from-emerald-500 to-teal-600", gradient: "from-emerald-50 to-teal-100", border: "border-emerald-200", textColor: "text-emerald-600", trend: booksRead > 0 ? "Great progress!" : "Start reading" },
            { label: "Unread Books", value: unreadBooks, icon: "", color: "from-amber-500 to-orange-600", gradient: "from-amber-50 to-orange-100", border: "border-amber-200", textColor: "text-amber-600", trend: unreadBooks > 0 ? "Keep going!" : "All caught up" },
            { label: "Completion", value: `${progress}%`, icon: "", color: "from-purple-500 to-indigo-600", gradient: "from-purple-50 to-indigo-100", border: "border-purple-200", textColor: "text-purple-600", trend: progress > 0 ? "On track!" : "Get started" }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
              style={{ animationDelay: `${idx * 100}ms`, animation: 'slideUp 0.5s ease-out forwards', opacity: 0 }}
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(90deg, transparent, ${stat.color.split(' ')[1]}, transparent)` }} />
              
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</p>
                    <p className="text-4xl font-bold text-gray-900 tracking-tight">{stat.value}</p>
                  </div>
                  <div className={`text-3xl p-3 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <span className="drop-shadow-md">{stat.icon}</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium text-emerald-600">↗︎</span>
                    <span className="text-xs text-gray-500">{stat.trend}</span>
                  </div>
                </div>
              </div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions with Hover Effects */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                <h2 className="text-xl font-bold text-gray-800">Quick Actions</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setCurrentPage('browse')}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative flex items-center justify-between w-full px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔍</span>
                      <span className="font-semibold text-white">Browse New Books</span>
                    </div>
                    <span className="text-white/70 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">→</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
                
                <button
                  onClick={() => setCurrentPage('vault')}
                  className="group relative overflow-hidden rounded-xl bg-gray-50 border-2 border-gray-100 hover:border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative flex items-center justify-between w-full px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📦</span>
                      <span className="font-semibold text-gray-700">Manage Your Vault</span>
                    </div>
                    <span className="text-gray-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300">→</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Reading Goal with Animated Progress */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 shadow-2xl">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
              </div>
              
              <div className="relative">
                <div className="flex items-start justify-between flex-wrap gap-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                      <span className="text-yellow-400 text-sm">🏆</span>
                      <span className="text-xs font-semibold text-white uppercase tracking-wide">2025 Challenge</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Reading Goal</h2>
                    <p className="text-gray-300 text-sm max-w-md">
                      You're crushing it! Keep this momentum and you'll hit your target early.
                    </p>
                  </div>
                  
                  {/* Circular Progress */}
                  <div className="relative">
                    <svg className="w-28 h-28 transform -rotate-90">
                      <circle
                        className="text-gray-700"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="52"
                        cx="56"
                        cy="56"
                      />
                      <circle
                        className="text-emerald-400 transition-all duration-1000 ease-out"
                        strokeWidth="8"
                        strokeDasharray={326.56}
                        strokeDashoffset={326.56 - (goalPercentage / 100) * 326.56}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="52"
                        cx="56"
                        cy="56"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-white font-bold text-2xl">{Math.round(goalPercentage)}%</span>
                      <span className="text-gray-400 text-xs">complete</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-400 font-medium">Progress</span>
                    <span className="text-white font-bold">{readingGoal.current} of {readingGoal.target} books</span>
                  </div>
                  <div className="relative w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 h-full rounded-full transition-all duration-1000 ease-out animate-shimmer"
                      style={{ width: `${goalPercentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    🎯 {readingGoal.target - readingGoal.current} more books to reach your goal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 1/3 width - Recent Activity */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
              </div>
              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">Last 30 days</span>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div 
                  key={activity.id} 
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${idx * 100}ms`, animation: 'slideUp 0.4s ease-out forwards', opacity: 0 }}
                >
                  <div className="relative">
                    <img 
                      src={activity.cover} 
                      alt={activity.title}
                      className="w-14 h-14 rounded-xl object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs shadow-md ${
                      activity.status === 'completed' 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {activity.status === 'completed' ? '✓' : '📘'}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-800 truncate group-hover:text-blue-600 transition-colors">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{activity.author}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.date}</p>
                  </div>
                  
                  <div className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    activity.status === 'completed'
                      ? 'bg-emerald-50 text-emerald-600'
                      : 'bg-blue-50 text-blue-600'
                  }`}>
                    {activity.status === 'completed' ? 'Finished' : 'Reading'}
                  </div>
                </div>
              ))}
              
              <button className="w-full mt-4 text-center text-sm font-semibold text-blue-600 hover:text-blue-700 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-200">
                View All Activity →
              </button>
            </div>
          </div>
        </div>

        {/* Discovery Banner with Glassmorphism */}
        <div className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md border border-white/50 shadow-xl p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm mb-4">
                <span className="text-xl">✨</span>
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Curated For You</span>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
                Discover Your Next Adventure
              </h2>
              <p className="text-gray-600 max-w-md">
                Explore hand-picked recommendations, trending titles, and hidden gems waiting to be discovered.
              </p>
            </div>
            
            <button
              onClick={() => setCurrentPage('browse')}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <span>Explore Collection</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Inspirational Footer */}
        <div className="text-center pt-8 pb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/50">
            <span className="text-sm">📖</span>
            <blockquote className="text-sm text-gray-600 italic">
              "A reader lives a thousand lives before he dies..."
            </blockquote>
            <span className="text-sm">✨</span>
          </div>
          <p className="text-xs text-gray-400 mt-4">© 2025 Book Vault • Every page tells a story</p>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 2s linear infinite;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  )
}