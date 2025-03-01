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
        <div className="border border-gray-300 rounded-md p-2 mx-3 my-2">
            <input
                type="text"
                placeholder={title}
                value={value}
                onChange={onChange}
                className="outline-none w-full" />
        </div>
    )
}