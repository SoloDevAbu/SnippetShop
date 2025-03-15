import { motion } from 'framer-motion'
import { Code2, ExternalLink, Calendar, Clock } from 'lucide-react'

interface SnippetCardProps {
  title: string
  language: string
  developer: string
  purchaseDate: string
  lastUsed?: string
  onView: () => void
}

export const SnippetCard = ({ 
  title, 
  language, 
  developer,
  purchaseDate,
  lastUsed,
  onView 
}: SnippetCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:bg-zinc-900/80 transition-all"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Code2 className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-400">{language} • By {developer}</p>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>Purchased: {new Date(purchaseDate).toLocaleDateString()}</span>
              {lastUsed && (
                <>
                  <Clock className="w-3 h-3 ml-2" />
                  <span>Last used: {new Date(lastUsed).toLocaleDateString()}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <button 
          onClick={onView}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-500/10"
        >
          <ExternalLink className="w-4 h-4" />
          <span>View</span>
        </button>
      </div>
    </motion.div>
  )
}