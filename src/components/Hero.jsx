import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div
            className="hero min-h-[calc(100vh-132px)]"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <span className='bg-gradient-to-r bg-300% from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>ByteBlaze</span></h1>
                    <p className="mb-6">
                        ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it
                    </p>
                    <div className='flex justify-center items-center gap-2'>
                        <Link to='/blog' className="btn btn-primary">Read Blogs</Link>
                        <Link to='/bookmarks' className="btn btn-primary">Bookmarks</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero