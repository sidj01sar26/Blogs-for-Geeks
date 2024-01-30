import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
    return (
        <div className=''>
            <NavLink to={`/blog/${post.id}`} >
                <span className='font-bold text-lg'>{post.title}</span>
            </NavLink>

            <p className='text-sm mt-1'>
                By
                <span className='italic'> {post.author}</span>
                on
                <span className='underline font-semibold ml-1 text-orange-400'>
                    <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                        {post.category}
                    </NavLink>
                </span>
            </p>

            <p className='text-xs mt-1'> Posted on {post.date} </p>
            <p className='font-normal mt-2'> {post.content}</p>

            <div className='text-sm flex flex-wrap gap-x-2 text-blue-700 underline mt-1 font-medium mb-2'>
                {post.tags.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span>{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogDetails;
