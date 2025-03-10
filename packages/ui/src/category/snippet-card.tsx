export const SnippetCard = ({language}: {
    language: string
}) => {
    return(
        <div className="flex flex-col gap-3 bg-zinc-900 rounded-lg p-4">
            
            <div className="flex justify-between">
                <h1 className="text-gray-300">Two Sum</h1>
                <h1 className="bg-zinc-800 px-2 py-1 rounded-lg">{language}</h1>
            </div>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nobis itaque totam ipsum unde voluptatem. Obcaecati, voluptatem facilis? Sed voluptatum culpa eos, exercitationem repellendus odio itaque quae eligendi rerum voluptates.</p>

            <div className="flex flex-wrap gap-2 text-gray-400">
                <p className="bg-zinc-800 px-2 py-1 rounded-md">tag1</p>
                <p className="bg-zinc-800 px-2 py-1 rounded-md">tag2</p>
                <p className="bg-zinc-800 px-2 py-1 rounded-md">tag3</p>
                <p className="bg-zinc-800 px-2 py-1 rounded-md">tag4</p>
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-800 px-16 py-2.5 rounded-lg font-semibold text-gray-200">View Snippet</button>
            </div>
        </div>
    )
}