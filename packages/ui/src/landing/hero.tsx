import React from 'react'
import { Card } from '../components/card'
import js from '../assets/js.png';
import cpp from '../assets/c++.png';
import java from '../assets/java.png';

export const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="text-6xl font-bold">SnippetShop</div>
                <div className="text-2xl">Buy premium code snippets</div>
            </div>
            <div className="flex justify-center text-center">
                <p> highly optimised with variety of language options that best suits your need and create amazing websites & apps.</p>
            </div>
            <div className='flex gap-4'>
                <Card image={js} title="JavaScript" />
                <Card image={cpp} title='JavaScript' />
                <Card image={java} title='JavaScript' />
            </div>
        </div>
    )
}