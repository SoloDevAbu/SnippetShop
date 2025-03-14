"use client"
import React from 'react'

const UserDashboard = () => {
  // Sample data for demonstration
  const stats = {
    totalSnippets: 15,
    languages: ['JavaScript', 'Python', 'C++', 'Java', 'C']
  }

  const sampleSnippets = [
    { title: 'Array Sorting Algorithm', language: 'JavaScript' },
    { title: 'Binary Search Implementation', language: 'Python' },
    { title: 'Linked List Operations', language: 'C++' },
    { title: 'Tree Traversal', language: 'Java' },
    { title: 'Memory Management', language: 'C' }
  ]

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-semibold text-gray-600 mb-8'>Dashboard</h1>
      
      {/* Stats Cards */}
      <div className='grid grid-cols-2 gap-4 mb-8'>
        <div className='bg-zinc-900 p-6 rounded-lg shadow'>
          <h3 className='text-lg font-medium'>Total Snippets</h3>
          <p className='text-2xl font-bold'>{stats.totalSnippets}</p>
        </div>
        <div className='bg-zinc-900 p-6 rounded-lg shadow'>
          <h3 className='text-lg font-medium'>Languages Used</h3>
          <div className='flex flex-wrap gap-2 mt-2'>
            {stats.languages.map((lang, index) => (
              <span key={index} className='bg-zinc-800 px-2 py-1 rounded text-sm'>
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Snippets List */}
      <div className='bg-zinc-900 rounded-lg shadow'>
        <h2 className='text-xl font-medium p-6 border-b'>Your Snippets</h2>
        <div className='divide-y'>
          {sampleSnippets.map((snippet, index) => (
            <div key={index} className='p-6 flex items-center justify-between'>
              <div>
                <h3 className='font-medium'>{snippet.title}</h3>
                <span className='text-sm text-gray-500'>{snippet.language}</span>
              </div>
              <button 
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
                onClick={() => console.log(`Downloading ${snippet.title}`)}
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserDashboard