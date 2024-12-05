import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { validateUser, saveToLocalStorage } from '../utils';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const user = validateUser(email, password);

        if (!user) {
            setError('Invalid email or password!');
            return;
        }

        saveToLocalStorage('loggedInUser', user); // Save logged-in user
        setError('');
        navigate('/dashboard');
    };

    return (
        <div className='flex justify-center items-center mt-12'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-200 text-gray-700">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-500">Sign in to access your account</p>
                </div>
                <form noValidate="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-gray-700"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-gray-700"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
                        >
                            Sign in
                        </button>
                        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                        <p className="px-6 text-sm text-center text-gray-400">
                            Don't have an account yet?{' '}
                            <NavLink to='/signup' className="hover:underline text-violet-400">Sign up</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
