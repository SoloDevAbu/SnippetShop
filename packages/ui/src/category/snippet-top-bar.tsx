interface SnippetTopBarProps {
    canBuy: boolean;
    onClick: () => void;
}

export const SnippetTopBar: React.FC<SnippetTopBarProps> = ({ canBuy, onClick }) => {
    return (
        <div className="flex justify-center gap-6 my-6 px-4">
            <button 
                className={`${!canBuy 
                    ? "bg-gray-500/50 opacity-60 cursor-not-allowed backdrop-blur-sm" 
                    : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-500/25"} 
                    rounded-xl px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/10`}>
                Buy Now
            </button>
            <button
                onClick={onClick}
                className="relative bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 rounded-xl px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-indigo-500/25 backdrop-blur-sm border border-white/10 group">
                <span className="absolute inset-0 rounded-xl bg-white/20 animate-pulse group-hover:bg-transparent transition-all duration-300"></span>
                Run Code
            </button>
        </div>
    )
}