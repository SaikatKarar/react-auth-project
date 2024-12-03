import React from 'react'

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
            <div className="flex-1">
                <a className="btn btn-ghost gap-0 text-secondary normal-case text-2xl">Byte<span className='text-primary'>Blaze</span></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-bold'><a>Home</a></li>
                    <li className='font-bold text-primary'><a>Blogs</a></li>
                    <li className='font-bold'><a>Bookmarks</a></li>
                    <li>
                        <details>
                            <summary className='font-bold'>Parent</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li className='font-semibold'><a>Login</a></li>
                                <li className='font-semibold'><a>Sign in</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar