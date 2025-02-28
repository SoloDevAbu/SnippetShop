export function InputBox({title}: {title: string}) {
    return (
        <div className="border border-gray-300 rounded-md p-2 mx-3 my-2">
            <input type="text" placeholder={title} className="outline-none"/>
        </div>
    )
}