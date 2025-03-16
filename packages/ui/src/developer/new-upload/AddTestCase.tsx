import { Plus } from 'lucide-react'

export function AddTestCase({ onClick }: { onClick: () => void }) {
    return (
        <div onClick={onClick} 
        className='items-center justify-center flex h-full min-h-[200px] hover:cursor-pointer border border-dashed border-gray-700/50 rounded-lg transition-all duration-200 hover:border-rose-500/50 hover:bg-rose-500/5 group'>
            <Plus size={38} className="text-gray-500 group-hover:text-rose-400 transition-colors"/>
        </div>
    )
}