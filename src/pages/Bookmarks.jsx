import React, { useEffect, useState } from 'react'
import { deleteBlog, getBlogs } from '../utils';
import BlogCard from '../components/BlogCard';
import EmptyState from '../components/EmptyState';

function Bookmarks() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }, [])
    const handleDelete = (id) => {
        deleteBlog(id);
        const storedBlogs = getBlogs()
        setBlogs(storedBlogs)
    }

    if (blogs < 1) return <EmptyState message='No Bookmarks Available!' address={'/blog'} label={'Go To Blogs'} />
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-12 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map(blog => (
                <BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog} />
            ))}
        </div>
    )
}

export default Bookmarks