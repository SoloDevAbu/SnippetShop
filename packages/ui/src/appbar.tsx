"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "./button"
import { useRouter } from "next/navigation"
import { Github, Menu, X, CodeXml, User, Search, ShoppingCart } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const Appbar = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-xl bg-gray-900/90' : 'backdrop-blur-md bg-transparent'
    }`}>
      <div className={`border-b transition-colors duration-300 ${
        isScrolled ? 'border-gray-800' : 'border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => router.push('/')}
            >
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl p-2 shadow-lg">
                <CodeXml className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                SnippetShop
              </span>
            </motion.div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search snippets..."
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-all duration-300"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {['Explore', 'Categories', 'Pricing'].map((item) => (
                  <motion.a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              {/* Cart Icon */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 text-xs bg-purple-500 rounded-full flex items-center justify-center">
                  2
                </span>
              </motion.button>

              {/* Auth Section */}
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://github.com/SoloDevAbu/SnippetShop"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                {session ? (
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => router.push("/developer/dashboard")}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r 
                               from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-medium
                               hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      <User className="h-4 w-4" />
                      Dashboard
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => signOut()}
                      className="px-4 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 
                               text-sm font-medium transition-all duration-300"
                    >
                      Logout
                    </motion.button>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => signIn()}
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                             text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 
                             transition-all duration-300"
                  >
                    Login
                  </motion.button>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white 
                         hover:bg-gray-700/50 transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu with improved animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-b border-gray-800"
          >
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search snippets..."
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {['Explore', 'Categories', 'Pricing'].map((item) => (
                  <motion.a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white 
                             hover:bg-gray-800/50 transition-all duration-300"
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Auth Section */}
              {session ? (
                <div className="space-y-2">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push("/developer/dashboard")}
                    className="w-full text-left px-3 py-2 rounded-lg bg-gradient-to-r 
                             from-blue-500 via-purple-500 to-pink-500 text-white"
                  >
                    Dashboard
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => signOut()}
                    className="w-full text-left px-3 py-2 rounded-lg bg-gray-800/50 text-gray-300"
                  >
                    Logout
                  </motion.button>
                </div>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => signIn()}
                  className="w-full text-left px-3 py-2 rounded-lg bg-gradient-to-r 
                           from-blue-500 via-purple-500 to-pink-500 text-white"
                >
                  Login
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}