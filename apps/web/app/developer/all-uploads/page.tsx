"use client"

import AllUploadCard from "@repo/ui/developer/all-upload/alluploadcard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Snippet } from "@/types/snippet";
import { Search, Filter, Plus, Loader2, FileCode, X, Check } from "lucide-react";

export default function AllUploads() {
    const [snippets, setSnippets] = useState<Snippet[]>([]);
    const [loading, setLoading] = useState(true);
    const [showFilters, setShowFilters] = useState(false);

    const filterOptions = {
        status: ['All', 'Active', 'Archived'],
        language: ['All', 'JavaScript', 'Python', 'TypeScript', 'Java', 'Other'],
        sortBy: ['Newest', 'Oldest', 'Most Viewed', 'Most Liked'],
    };

    useEffect(() => {
        const allSnippets = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/v1/developer/all-snippets", {
                    withCredentials: true
                });
                setSnippets(response.data.snippets);
            } catch (error) {
                console.error("Error fetching dashboard data: ", error);
            } finally {
                setLoading(false);
            }
        };
        allSnippets();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const filterMenu = document.getElementById('filter-menu');
            const filterButton = document.getElementById('filter-button');
            if (filterMenu && filterButton && 
                !filterMenu.contains(event.target as Node) && 
                !filterButton.contains(event.target as Node)) {
                setShowFilters(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8 space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-100">Your Snippets</h1>
                    <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg font-medium text-emerald-50 text-sm transition-colors duration-200 flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        New Snippet
                    </button>
                </div>
                
                <div className="flex gap-4 flex-col sm:flex-row relative">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input 
                            type="text"
                            placeholder="Search snippets..."
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg py-2 pl-10 pr-4 text-sm text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-emerald-600"
                        />
                    </div>
                    <div className="relative">
                        <button
                            id="filter-button"
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border rounded-lg text-sm transition-colors ${
                                showFilters 
                                ? 'border-emerald-600 text-emerald-400' 
                                : 'border-zinc-800 text-gray-300 hover:border-zinc-700'
                            }`}
                        >
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>

                        {showFilters && (
                            <div 
                                id="filter-menu"
                                className="absolute right-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg z-50"
                            >
                                <div className="p-3 border-b border-zinc-800 flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-200">Filters</span>
                                    <button 
                                        onClick={() => setShowFilters(false)}
                                        className="text-gray-400 hover:text-gray-300"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                                
                                {Object.entries(filterOptions).map(([category, options]) => (
                                    <div key={category} className="p-3 border-b border-zinc-800 last:border-0">
                                        <h3 className="text-xs font-medium text-gray-400 uppercase mb-2">
                                            {category}
                                        </h3>
                                        <div className="space-y-1">
                                            {options.map((option) => (
                                                <button
                                                    key={option}
                                                    className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-gray-300 hover:bg-zinc-800 rounded-md"
                                                >
                                                    <Check className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100" />
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                
                                <div className="p-3 border-t border-zinc-800 flex justify-end gap-2">
                                    <button 
                                        onClick={() => setShowFilters(false)}
                                        className="px-3 py-1.5 text-sm text-gray-400 hover:text-gray-300"
                                    >
                                        Clear
                                    </button>
                                    <button 
                                        onClick={() => setShowFilters(false)}
                                        className="px-3 py-1.5 text-sm bg-emerald-600 hover:bg-emerald-500 text-white rounded-md"
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="h-[80vh] flex items-center justify-center">
                    <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
                </div>
            ) : (
                <>
                    {snippets.length > 0 ? (
                        <div className="grid gap-4">
                            {snippets.map((snippet) => (
                                <AllUploadCard 
                                    key={snippet.id}
                                    title={snippet.title}
                                    language={snippet.language.extension}
                                    description={snippet.description}
                                    tags={snippet.tags}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
                            <div className="w-24 h-24 rounded-full bg-zinc-800/50 flex items-center justify-center">
                                <FileCode className="w-12 h-12 text-emerald-500" />
                            </div>
                            <p className="text-2xl text-gray-400 font-medium text-center">No snippets yet</p>
                            <p className="text-gray-500">Create your first snippet to get started</p>
                            <button className="mt-4 bg-emerald-600 hover:bg-emerald-500 px-6 py-2 rounded-lg font-medium text-emerald-50 text-sm transition-colors duration-200 flex items-center gap-2">
                                <Plus className="w-4 h-4" />
                                Create Snippet
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}