import { Plus } from 'lucide-react'

export function AddTestCase({ onClick }: { onClick: () => void }) {
    return (
        <div onClick={onClick} 
        className='items-center justify-center flex hover:cursor-pointer shadow-sm shadow-red-300'>
            <Plus size={38}/>
        </div>
    )
}