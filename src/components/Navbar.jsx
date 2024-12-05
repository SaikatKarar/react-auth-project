import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getFromLocalStorage, removeFromLocalStorage } from '../utils';
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
    const navigate = useNavigate();

    // Fetch logged in user 
    const user = getFromLocalStorage('loggedInUser');

    const handleLogout = () => {
        removeFromLocalStorage('loggedInUser');
        navigate('/');
    };

    return (
        <div className="navbar bg-base-100 shadow-lg px-4 sm:px-12 fixed z-10">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost gap-0 text-secondary normal-case text-2xl">
                    Byte<span className='text-primary'>Blaze</span>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 hidden sm:flex sm:items-center gap-5">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>
                        Home
                    </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>
                        Blogs
                    </NavLink>
                    <NavLink to='/bookmarks' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>
                        Bookmarks
                    </NavLink>

                    {user ? (
                        <li>
                            <details>
                                <summary className='font-bold'>
                                    <FaRegUserCircle className='w-8 h-8' />
                                </summary>

                                <ul className='flex flex-col items-center gap-3'>
                                    <span className="font-bold">{user.name}</span>
                                    <NavLink to='/dashboard' className='font-bold text-primary'>
                                        Dashboard
                                    </NavLink>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                                    >
                                        Logout
                                    </button>
                                </ul>
                            </details>
                        </li>
                    ) : (
                        <li>
                            <details>
                                <summary className='font-bold'>Join</summary>
                                <ul className="flex flex-col gap-2 bg-base-100 rounded-t-none">
                                    <NavLink to='login' className='font-semibold hover:bg-slate-200 px-2 py-1'>
                                        Login
                                    </NavLink>
                                    <NavLink to='signup' className='font-semibold hover:bg-slate-200 px-2 py-1'>
                                        Sign up
                                    </NavLink>
                                </ul>
                            </details>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
