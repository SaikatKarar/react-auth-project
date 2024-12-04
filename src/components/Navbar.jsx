import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-lg px-4 sm:px-12 fixed z-10">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost gap-0 text-secondary normal-case text-2xl">Byte<span className='text-primary'>Blaze</span></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 hidden sm:flex sm:items-center gap-5">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}><a>Home</a></NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}><a>Blogs</a></NavLink>
                    <NavLink to='/bookmarks' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}><a>Bookmarks</a></NavLink>
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