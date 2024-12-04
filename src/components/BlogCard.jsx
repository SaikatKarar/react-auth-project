import React from 'react'
import { Link } from 'react-router-dom'
import placeholderImage from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";


function BlogCard({ blog, deletable, handleDelete }) {
    const { id, cover_image, title, published_timestamp, description } = blog;

    return (
        <div className='flex relative'>
            <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline">
                <img role="presentation" className="object-cover w-full rounded h-44" src={cover_image || placeholderImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-600">{new Date(published_timestamp).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {deletable && (<div onClick={() => handleDelete(id)} className='absolute bg-primary p-2 ml-5 rounded-full hover:bg-secondary group cursor-pointer hover:scale-105 -top-4 -right-3'>
                <MdDeleteForever size={20} className='text-secondary group-hover:text-primary' />
            </div>)}
        </div>
    )
}

export default BlogCard