export const SnippetCard = () => {
    return(
        <div className="flex flex-col gap-3 bg-zinc-900 rounded-lg p-4">
            <h1 className="text-gray-300">Two Sum</h1>
            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nobis itaque totam ipsum unde voluptatem. Obcaecati, voluptatem facilis? Sed voluptatum culpa eos, exercitationem repellendus odio itaque quae eligendi rerum voluptates.</p>

            <div className="flex flex-wrap gap-2 text-gray-400">
                <p className="bg-zinc-800 px-2 py-1 rounded-md">tag1</p>
                <p className="bg-zinc-800 px-2 py-1 rounded-md">tag2</p>
                <p className="bg-zinc-800 px-2 py-1 rounded-md">tag3</p>
                <p className="bg-zinc-800 px-2 py-1 rounded-md">tag4</p>
            </div>
        </div>
    )
}