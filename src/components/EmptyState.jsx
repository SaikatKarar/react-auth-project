import React from 'react'
import { Link } from 'react-router-dom'

function EmptyState({ message, address, label }) {
    return (
        <div className='min-h-[calc(100vh-132px)] gap-5 flex flex-col justify-center items-center pb-16'>
            <p>{message}</p>
            <Link to={address} className="btn btn-primary">{label}</Link>
        </div>
    )
}

export default EmptyState