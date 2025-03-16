export function InputBox({
    title,
    value,
    onChange,
}: {
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="relative border border-gray-700/50 bg-gray-900/30 rounded-lg p-3 mx-3 my-2 transition-all duration-200 hover:border-gray-600 focus-within:border-rose-500/50 focus-within:shadow-sm focus-within:shadow-rose-500/20">
            <input
                type="text"
                placeholder={title}
                value={value}
                onChange={onChange}
                className="outline-none w-full bg-transparent text-gray-200 placeholder:text-gray-500" />
        </div>
    )
}