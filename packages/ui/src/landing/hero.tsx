import { Card } from '../components/card'
import { categories } from '../../constants/categories'
import { Search, Sparkles } from 'lucide-react'

export const Hero = () => {
    return (
        <div className='text-gray-300 flex flex-col items-center justify-center gap-8 py-12'>
            <div className="flex flex-col items-center justify-center gap-4 animate-fade-in">
                <div className="relative">
                    <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
                        SnippetShop
                    </h1>
                    <Sparkles className="absolute -right-8 -top-4 text-purple-400 animate-pulse" />
                </div>
                <p className="text-2xl font-light text-gray-400 animate-fade-in-up">Buy premium code snippets</p>
            </div>
            
            <div className="max-w-2xl text-center text-gray-400 hover:text-gray-300 transition-colors duration-300">
                <p className="text-lg leading-relaxed">Highly optimized snippets with variety of language options that best suits your need and create amazing websites & apps.</p>
            </div>

            <div className="w-full max-w-2xl relative group">
                <input 
                    type="text" 
                    placeholder="Search for snippets..."
                    className="w-full px-6 py-4 bg-zinc-800/50 rounded-full border border-zinc-700 focus:outline-none focus:border-purple-500 transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-zinc-800/70"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-500/80 p-2 rounded-full hover:bg-purple-500 transition-colors duration-300 cursor-pointer">
                    <Search className="text-gray-200 h-5 w-5" />
                </div>
            </div>

            <div className="w-full pt-12">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    Browse Categories
                    <span className="text-sm font-normal text-purple-400">({categories.length})</span>
                </h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {categories.map((category) => (
                        <Card key={category.id} title={category.title} image={category.image} category={category.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}