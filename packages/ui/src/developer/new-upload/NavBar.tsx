import { JSX } from "react/jsx-runtime";
import { CloudUpload } from "lucide-react"
import { Play } from "lucide-react"

export function NavBar({
    onSubmit,
    onRun,
}: {
    onSubmit: () => void;
    onRun: () => void;
}): JSX.Element {
    return (
        <div className="flex justify-center items-center gap-4 my-1">

            <button
                onClick={onSubmit}
                className="flex gap-2 px-3 py-1.5 bg-gray-300 rounded-md text-green-600 font-bold">
                <CloudUpload />
                Submit
            </button>
            <button
                onClick={onRun}
                className="flex gap-2 px-3 py-1.5 bg-gray-300 rounded-md text-gray-700 font-bold">
                <Play />
                Run
            </button>
        </div>
    )
}