
import { Card } from '../components/card'
import { categories } from '../../constants/categories'

export const Hero = () => {
    return (
        <div className='text-gray-300 flex flex-col items-center justify-center gap-4'>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-6xl font-bold">SnippetShop</div>
                <div className="text-2xl">Buy premium code snippets</div>
            </div>
            <div className="flex justify-center text-center">
                <p> highly optimised with variety of language options that best suits your need and create amazing websites & apps.</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                {categories.map((category) => (
                    <Card key={category.id} title={category.title} image={category.image} category={category.id}/>
                ))}
            </div>
        </div>
    )
}