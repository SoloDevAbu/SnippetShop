import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StatsCardProps {
  title: string
  value: ReactNode
  icon: ReactNode
  gradient: string
}

export const StatsCard = ({ title, value, icon, gradient }: StatsCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, translateY: -5 }}
      transition={{ duration: 0.2 }}
      className={`${gradient} p-6 rounded-xl shadow-lg backdrop-blur-sm border border-white/10`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-300">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
        </div>
        <div className="text-white/80">
          {icon}
        </div>
      </div>
    </motion.div>
  )
}