import { BookOpen, Mail, Github, Twitter, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Book Vault</h3>
                <p className="text-gray-400 text-sm">Your Personal Library</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Manage your personal book collection with style. Track your reading journey, 
              discover new adventures, and build your ultimate digital library.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@bookvault.com" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Browse Books
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  My Vault
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Book Vault</span>
              <span>·</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for book lovers</span>
            </div>
            
            <div className="text-sm text-gray-400">
              <span>Version 1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
