import { Plus } from 'lucide-react'

export function AddTestCase({ onClick }: { onClick: () => void }) {
    return (
        <div onClick={onClick} 
        className='items-center justify-center flex h-full min-h-[200px] hover:cursor-pointer border-2 border-dashed border-white/5 rounded-xl transition-all duration-500 hover:border-indigo-500/50 hover:bg-indigo-500/5 group backdrop-blur-sm bg-black/20 shadow-2xl animate-float'>
            <Plus size={42} className="text-gray-500 group-hover:text-indigo-400 transition-all duration-500 transform group-hover:rotate-180 group-hover:scale-110"/>
        </div>
    )
}