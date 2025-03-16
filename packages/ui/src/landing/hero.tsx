"use client"

import { Card } from '../components/card'
import { categories } from '../../constants/categories'
import { Search, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from '../hooks/useDebounce'
import axios from 'axios'

interface SearchResult {
    id: string;
    title: string;
    language: {
        name: string;
        extension: string;
    }
}
export const Hero = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const debounceSearch = useDebounce(searchQuery, 300);

    useEffect(() => {
        const fetchResult = async () => {
            if (debounceSearch.length < 3) {
                setResults([]);
                return;
            }

            setIsLoading(true);

            try {
                const response = await axios.get(`http://localhost:5000/api/v1/search/snippets?query=${debounceSearch}`);
                setResults(response.data.snippets);
                console.log(response.data);
            } catch (error) {
                console.error('Search failed', error);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchResult();
    }, [debounceSearch])

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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-500/80 p-2 rounded-full hover:bg-purple-500 transition-colors duration-300 cursor-pointer">
                    {isLoading ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-200 border-t-transparent" />
                    ) : (
                        <Search className="text-gray-200 h-5 w-5" />
                    )}
                </div>

                {results.length > 0 && (
                    <div className="absolute w-full mt-2 bg-zinc-800/95 rounded-lg border border-zinc-700 shadow-xl backdrop-blur-sm">
                        {results.map((result) => (
                            <div
                                key={result.id}
                                onClick={() => router.push(`/category/${result.language.extension}/${result.id}`)}
                                className="px-4 py-3 hover:bg-zinc-700/50 cursor-pointer flex items-center justify-between"
                            >
                                <div>
                                    <h3 className="text-white font-medium">{result.title}</h3>
                                    <p className="text-sm text-gray-400">{result.language.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="w-full pt-12">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    Browse Categories
                    <span className="text-sm font-normal text-purple-400">({categories.length})</span>
                </h2>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {categories.map((category) => (
                        <Card key={category.id} title={category.title} image={category.image} category={category.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}