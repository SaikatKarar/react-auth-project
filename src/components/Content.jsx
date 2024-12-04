import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Markdown from 'react-markdown'
import placeholderImage from '../assets/404.jpg'
import rehypeRaw from 'rehype-raw';

function Content() {
    const blog = useLoaderData();
    const { cover_image, title, published_timestamp, description, tags, body_html } = blog;

    return (
        <div className="mx-auto group hover:no-underline focus:no-underline">
            <img role="presentation" className="object-cover w-full rounded h-44" src={cover_image || placeholderImage} />

            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                {tags.map(e => (
                    <a key={e} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">#{e}</a>
                ))}
            </div>

            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div >
    )
}

export default Content