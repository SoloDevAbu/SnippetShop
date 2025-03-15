"use client"
import { motion } from 'framer-motion'
import { StatsCard } from '@/components/user/stats-card'
import { SnippetCard } from '@/components/user/snippet-card'
import { Code2, CreditCard, BookOpen, Languages } from 'lucide-react'
import { useState } from 'react'

interface PurchasedSnippet {
  id: number
  title: string
  language: string
  purchaseDate: string
  developer: string
  lastUsed?: string
}

const UserDashboard = () => {
  const [purchasedSnippets, setPurchasedSnippets] = useState<PurchasedSnippet[]>([
    { 
      id: 1, 
      title: 'Array Sorting Algorithm', 
      language: 'JavaScript', 
      purchaseDate: '2024-03-10',
      developer: 'John Doe',
      lastUsed: '2024-03-15'
    },
    { 
      id: 2, 
      title: 'Binary Search Implementation', 
      language: 'Python',
      purchaseDate: '2024-03-08',
      developer: 'Jane Smith',
      lastUsed: '2024-03-14'
    },
    // ...more snippets
  ]);

  const stats = {
    totalPurchased: purchasedSnippets.length,
    recentlyUsed: purchasedSnippets.filter(s => s.lastUsed).length,
    uniqueLanguages: [...new Set(purchasedSnippets.map(s => s.language))].length
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='p-8 max-w-7xl mx-auto'
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600'>
            My Library
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            Browse Marketplace
          </motion.button>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <StatsCard 
            title="Purchased Snippets" 
            value={stats.totalPurchased}
            icon={<CreditCard size={24} />}
            gradient="bg-gradient-to-br from-blue-500/10 to-purple-600/10"
          />
          <StatsCard 
            title="Recently Used" 
            value={stats.recentlyUsed}
            icon={<BookOpen size={24} />}
            gradient="bg-gradient-to-br from-green-500/10 to-emerald-600/10"
          />
          <StatsCard 
            title="Languages" 
            value={stats.uniqueLanguages}
            icon={<Code2 size={24} />}
            gradient="bg-gradient-to-br from-yellow-500/10 to-orange-600/10"
          />
        </div>

        {/* Recently Used Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recently Used Snippets</h2>
          <div className="grid grid-cols-1 gap-4">
            {purchasedSnippets
              .filter(s => s.lastUsed)
              .sort((a, b) => new Date(b.lastUsed!).getTime() - new Date(a.lastUsed!).getTime())
              .slice(0, 3)
              .map((snippet) => (
                <SnippetCard
                  key={snippet.id}
                  title={snippet.title}
                  language={snippet.language}
                  developer={snippet.developer}
                  lastUsed={snippet.lastUsed}
                  purchaseDate={snippet.purchaseDate}
                  onView={() => console.log(`Viewing ${snippet.title}`)}
                />
              ))}
          </div>
        </div>

        {/* All Purchases */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">All Purchases</h2>
          <div className="grid grid-cols-1 gap-4">
            {purchasedSnippets.map((snippet) => (
              <SnippetCard
                key={snippet.id}
                title={snippet.title}
                language={snippet.language}
                developer={snippet.developer}
                purchaseDate={snippet.purchaseDate}
                onView={() => console.log(`Viewing ${snippet.title}`)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default UserDashboard