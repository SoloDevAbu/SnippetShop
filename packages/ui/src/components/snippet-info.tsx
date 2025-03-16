interface SnippetInfoProps {
    title: string;
    language: string;
    description: string;
    tags: string[];
    developerName: string
}

export const SnippetInfo = ({ title, language, description, tags, developerName }: SnippetInfoProps) => {
    return (
        <div className='flex flex-col gap-4 bg-gradient-to-br from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 rounded-xl p-6 shadow-2xl border border-white/5 backdrop-blur-sm animate-float'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>{title}</h1>
                <h3 className='bg-gradient-to-br from-emerald-500/20 to-teal-500/20 px-5 py-2 rounded-lg text-emerald-400 font-medium shadow-inner border border-emerald-500/20 backdrop-blur-sm'>{language}</h3>
            </div>
            <div className='bg-black/20 backdrop-blur-md rounded-lg p-5 shadow-inner border border-white/5'>
                <h3 className="text-gray-200 font-semibold mb-3">Description</h3>
                <p className='text-gray-300 pl-2 leading-relaxed'>{description}</p>
            </div>
            <div className='flex flex-col gap-3'>
                <h3 className="text-gray-200 font-semibold">Tags </h3>
                <div className="flex flex-wrap gap-2 pl-2">
                    {tags.map((tag, index) => (
                        <p key={index} className='bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 px-5 py-2 rounded-full text-sm font-medium text-emerald-400 transition-all duration-300 hover:bg-zinc-700/50 hover:text-emerald-300 cursor-default border border-white/5 backdrop-blur-sm hover:scale-105'>{tag}</p>
                    ))}
                </div>
            </div>
            <div className="flex gap-3 items-center bg-black/20 p-4 rounded-lg w-fit backdrop-blur-sm border border-white/5">
                <h3 className="text-gray-200 font-semibold">Developer</h3>
                <p className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">{developerName}</p>
            </div>
        </div>
    )
}