import React, { useContext } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);

        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);

        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch (error) {
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])

    return (
        <div>
            <Header />
            <div className='py-6 max-w-[720px] w-11/12 mx-auto mt-[100px]'>
                <button className='px-4 py-1 border rounded-md' onClick={() => navigation(-1)}>
                    Back
                </button>
            </div>

            <div className='w-11/12 max-w-[720px] scroll-smooth mx-auto mb-10 justify-center items-center flex flex-col'>
                {
                    loading ?
                        (<div>
                            <p> Loading</p>
                        </div>) :
                        blog ?
                            (<div className='mb-10'>
                                <BlogDetails post={blog} />
                                <h2 className='font-bold text-2xl py-6'> Related Blogs </h2>
                                <div className='flex flex-col gapy-y-7'>
                                    {
                                        relatedblogs.map((post) => (
                                            <div key={post.id}>
                                                <BlogDetails post={post} />
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>) :
                            (<div>
                                <p>No Blog Found</p>
                            </div>)

                }
            </div>

        </div>
    )
}

export default BlogPage;
