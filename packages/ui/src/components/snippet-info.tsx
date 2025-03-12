interface SnippetInfoProps {
    title: string;
    language: string;
    description: string;
    tags: string[];
    developerName: string
}

export const SnippetInfo = ({ title, language, description, tags, developerName }: SnippetInfoProps) => {
    return (
        <div className='flex flex-col gap-4 bg-zinc-900 rounded-lg p-4'>
            <div className='flex justify-between'>
                <h1 className='text-lg font-semibold text-gray-200'>{title}</h1>
                <h3 className='bg-zinc-800 px-2 py-1 rounded-lg'>{language}</h3>
            </div>
            <div className='bg-zinc-800 rounded-lg p-2'>
                <h3 className="text-gray-300 font-semibold">Description:</h3>
                <p className='text-gray-300 pl-2'>{description}</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3>Tags: </h3>
                <div className="flex flex-wrap gap-2 pl-2">
                    {tags.map((tag, index) => (
                        <p key={index} className='bg-zinc-800 px-4 py-2 rounded-lg'>{tag}</p>
                    ))}
                </div>
            </div>
            <div className="flex gap-2 items-center bg-zinc-800 p-2 rounded-lg w-fit">
                <h3 className=" text-gray-300 font-semibold">Developer:</h3>
                <p className="text-gray-400 text-sm">{developerName}</p>
            </div>
        </div>
    )
}