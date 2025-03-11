import React from 'react'

const SnippetPreview = () => {
  return (
    <div className='md:flex overflow-x-hidden h-screen'>
        <section className='flex flex-col gap-4 w-full md:w-1/2 p-4 h-[50vh] md:h-screen overflow-y-auto mb-4 md:mb-0'>
            <h1 className='text-3xl font-semibold text-gray-300'>Snippet Information</h1>
            <div className='flex flex-col gap-4 bg-zinc-900 rounded-lg p-4'>
                <div className='flex justify-between'>
                    <h1 className='text-lg font-semibold text-gray-200'>Two Sum</h1>
                    <h3 className='bg-zinc-800 px-2 py-1 rounded-lg'>JavaScript</h3>
                </div>
                <div className='bg-zinc-800 rounded-lg p-2'>
                    <p className='text-gray-300'>this is the demo description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis, aspernatur accusantium architecto enim suscipit quidem consectetur, nobis neque, natus vel ut id nam saepe iure veritatis ipsam modi adipisci.</p>
                </div>
                <div className='flex flex-wrap gap-2'>
                    <p className='bg-zinc-800 px-4 py-2 rounded-lg'>Tag1</p>
                    <p className='bg-zinc-800 px-4 py-2 rounded-lg'>Tag1</p>
                    <p className='bg-zinc-800 px-4 py-2 rounded-lg'>Tag1</p>
                    <p className='bg-zinc-800 px-4 py-2 rounded-lg'>Tag1</p>
                    <p className='bg-zinc-800 px-4 py-2 rounded-lg'>Tag1</p>
                </div>
            </div>
            <h1 className='text-3xl font-semibold text-gray-300'>Test Result</h1>
            <div className='bg-zinc-900 rounded-lg p-4'>
                <div>
                    <h3>Test Case 1</h3>

                </div>
            </div>
        </section>
        <section className='w-full md:w-1/2 p-4 h-[50vh] md:h-screen overflow-y-auto'>
            <h1 className='text-3xl text-gray-300 font-semibold mb-4'>Test Cases</h1>
            <div className='flex flex-col gap-2'>
                <div className='bg-zinc-900 p-4 rounded-lg'>
                    <h3 className='text-gray-300 mb-2 font-semibold'>Test Case 1</h3>
                    <div className='flex gap-4'>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Input</h3>
                            <p className='px-4 py-2'>3 4</p>
                        </div>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Output</h3>
                            <p className='px-4 py-2'>7</p>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-900 p-4 rounded-lg'>
                    <h3 className='text-gray-300 mb-2 font-semibold'>Test Case 1</h3>
                    <div className='flex gap-4'>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Input</h3>
                            <p className='px-4 py-2'>3 4</p>
                        </div>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Output</h3>
                            <p className='px-4 py-2'>7</p>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-900 p-4 rounded-lg'>
                    <h3 className='text-gray-300 mb-2 font-semibold'>Test Case 1</h3>
                    <div className='flex gap-4'>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Input</h3>
                            <p className='px-4 py-2'>3 4</p>
                        </div>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Output</h3>
                            <p className='px-4 py-2'>7</p>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-900 p-4 rounded-lg'>
                    <h3 className='text-gray-300 mb-2 font-semibold'>Test Case 1</h3>
                    <div className='flex gap-4'>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Input</h3>
                            <p className='px-4 py-2'>3 4</p>
                        </div>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Output</h3>
                            <p className='px-4 py-2'>7</p>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-900 p-4 rounded-lg'>
                    <h3 className='text-gray-300 mb-2 font-semibold'>Test Case 1</h3>
                    <div className='flex gap-4'>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Input</h3>
                            <p className='px-4 py-2'>3 4</p>
                        </div>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Output</h3>
                            <p className='px-4 py-2'>7</p>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-900 p-4 rounded-lg'>
                    <h3 className='text-gray-300 mb-2 font-semibold'>Test Case 1</h3>
                    <div className='flex gap-4'>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Input</h3>
                            <p className='px-4 py-2'>3 4</p>
                        </div>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Output</h3>
                            <p className='px-4 py-2'>7</p>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-900 p-4 rounded-lg'>
                    <h3 className='text-gray-300 mb-2 font-semibold'>Test Case 1</h3>
                    <div className='flex gap-4'>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Input</h3>
                            <p className='px-4 py-2'>3 4</p>
                        </div>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Output</h3>
                            <p className='px-4 py-2'>7</p>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-900 p-4 rounded-lg'>
                    <h3 className='text-gray-300 mb-2 font-semibold'>Test Case 1</h3>
                    <div className='flex gap-4'>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Input</h3>
                            <p className='px-4 py-2'>3 4</p>
                        </div>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Output</h3>
                            <p className='px-4 py-2'>7</p>
                        </div>
                    </div>
                </div>
                <div className='bg-zinc-900 p-4 rounded-lg'>
                    <h3 className='text-gray-300 mb-2 font-semibold'>Test Case 1</h3>
                    <div className='flex gap-4'>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Input</h3>
                            <p className='px-4 py-2'>3 4</p>
                        </div>
                        <div className='w-1/2 bg-zinc-800 rounded-lg'>
                            <h3 className='bg-zinc-700 p-2 rounded-t-lg'>Output</h3>
                            <p className='px-4 py-2'>7</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SnippetPreview