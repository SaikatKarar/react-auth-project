import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { saveUserToLocalStorage, isUserExists } from '../utils';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = () => {
        if (!name || !email || !password) {
            setError('All fields are required!');
            setSuccess('');
            return;
        }

        if (isUserExists(email)) {
            setError('User already exists!');
            setSuccess('');
            return;
        }

        saveUserToLocalStorage({ name, email, password });
        setError('');
        setSuccess('Account created successfully!');
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className='flex justify-center items-center my-12'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-200 text-gray-700">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign up</h1>
                    <p className="text-sm text-gray-500">Create an account to access your dashboard</p>
                </div>
                <form noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">User Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-gray-700"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="leroy@jenkins.com"
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
                                placeholder="*****"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-gray-700"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <button
                            type="button"
                            onClick={handleSignUp}
                            className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
                        >
                            Sign up
                        </button>
                        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                        {success && <p className="text-sm text-green-500 mt-2">{success}</p>}
                        <p className="px-6 text-sm text-center text-gray-400">
                            Already have an account?{' '}
                            <NavLink to='/login' className="hover:underline text-violet-400">Sign in</NavLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
