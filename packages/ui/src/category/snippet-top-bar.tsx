interface SnippetTopBarProps {
    onClick: () => void;
}

export const SnippetTopBar: React.FC<SnippetTopBarProps> = ({ onClick }) => {
    return (
        <div className="flex justify-center gap-4 my-2">
            <button className="bg-green-500 rounded-lg px-4 py-2">Buy</button>
            <button
                onClick={onClick}
                className="bg-green-500 rounded-lg px-4 py-2">Run</button>
        </div>
    )
}