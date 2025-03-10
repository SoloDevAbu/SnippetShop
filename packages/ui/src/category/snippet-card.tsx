interface Tag {
    tag: {
        name: string
    }
}

export const SnippetCard = ({title, language, description, tags}: {
    title: string;
  language: string;
  description: string;
  tags: Tag[];
}) => {
    return(
        <div className="flex flex-col gap-3 bg-zinc-900 rounded-lg p-4">
            
            <div className="flex justify-between">
                <h1 className="text-gray-300">{title}</h1>
                <h1 className="bg-zinc-800 px-2 py-1 rounded-lg">{language}</h1>
            </div>
            <p className="text-gray-400">{description}</p>

            <div className="flex flex-wrap gap-2 text-gray-400">
                {tags.map((tag, index) => (
                    <p key={index} className="bg-zinc-800 px-2 py-1 rounded-md">
                        {tag.tag.name}
                    </p>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="bg-blue-800 px-16 py-2.5 rounded-lg font-semibold text-gray-200">View Snippet</button>
            </div>
        </div>
    )
}