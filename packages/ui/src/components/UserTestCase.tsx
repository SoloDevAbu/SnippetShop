import { CircleCheckBig, CircleX } from "lucide-react";

interface TestCaseProps {
    number: number;
    input: string;
    output: string;
    isSuccess?: boolean;
    onInputChange?: (value: string) => void;
    onOutputChange?: (value: string) => void;
}

export const UserTestCase = ({ number, input, output, isSuccess, onInputChange, onOutputChange }: TestCaseProps) => {
    
    const isEditable = onInputChange !== undefined || onOutputChange !== undefined;
    
    return (
        <div className='flex flex-col gap-3 p-5 bg-gradient-to-br from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 rounded-xl shadow-2xl border border-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-indigo-500/10 group'>
            <div className='flex gap-3 items-center'>
                <h3 className='text-gray-200 font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Test Case {number}</h3>
                {isSuccess !== undefined && (
                    isSuccess ? 
                        <CircleCheckBig className="text-emerald-500 transition-all duration-500 hover:scale-110 animate-success"/> : 
                        <CircleX className="text-rose-500 transition-all duration-500 hover:scale-110 animate-error"/>
                )}
            </div>
            <div className='flex gap-4'>
                <div className='w-1/2 bg-black/20 rounded-lg shadow-inner border border-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-indigo-500/20'>
                    <h3 className='bg-gradient-to-r from-zinc-800/90 to-zinc-900/90 p-3 rounded-t-lg font-medium text-gray-200 border-b border-white/5'>Input</h3>
                    {isEditable ? (
                        <input
                            className="bg-transparent m-3 outline-none w-[90%] text-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 rounded-md px-2"
                            type="text"
                            value={input}
                            onChange={(e) => onInputChange?.(e.target.value)}
                            placeholder="Enter your Input"
                        />
                    ): (
                        <p className='px-4 py-3 text-gray-300'>{input}</p>
                    )}
                </div>
                <div className='w-1/2 bg-black/20 rounded-lg shadow-inner border border-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-indigo-500/20'>
                    <h3 className='bg-gradient-to-r from-zinc-800/90 to-zinc-900/90 p-3 rounded-t-lg font-medium text-gray-200 border-b border-white/5'>Output</h3>
                    {isEditable ? (
                        <input
                            className="bg-transparent m-3 outline-none w-[90%] text-gray-200 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 rounded-md px-2"
                            type="text"
                            value={output}
                            onChange={(e) => onOutputChange?.(e.target.value)}
                            placeholder="Enter Expected Output"
                        />
                    ): (
                        <p className='px-4 py-3 text-gray-300'>{output}</p>
                    )}
                </div>
            </div>
        </div>
    )
}