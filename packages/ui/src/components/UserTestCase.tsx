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
        <div className='flex flex-col gap-2'>
            <div className='flex gap-2'>
                <h3 className='text-gray-300 font-semibold'>Test Case {number}</h3>
                {isSuccess !== undefined && (
                    isSuccess ? 
                        <CircleCheckBig style={{ color: '#22c55e' }}/> : 
                        <CircleX style={{ color: '#ef4444' }}/>
                )}
            </div>
            <div className='flex gap-4'>
                <div className='w-1/2 bg-zinc-800 rounded-lg'>
                    <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Input</h3>
                    {isEditable ? (
                        <input
                            className="bg-transparent m-2 outline-none"
                            type="text"
                            value={input}
                            onChange={(e) => onInputChange?.(e.target.value)}
                            placeholder="Enter your Input"
                        />
                    ): (
                        <p className='px-4 py-2'>{input}</p>
                    )}
                </div>
                <div className='w-1/2 bg-zinc-800 rounded-lg'>
                    <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Output</h3>
                    {isEditable ? (
                        <input
                            className="bg-transparent m-2 outline-none"
                            type="text"
                            value={output}
                            onChange={(e) => onOutputChange?.(e.target.value)}
                            placeholder="Enter Expected Output"
                        />
                    ): (
                        <p className='px-4 py-2'>{output}</p>
                    )}
                </div>
            </div>
        </div>
    )
}