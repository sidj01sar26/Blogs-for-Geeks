import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    return (

        <div>
            <Header />
            <div className='flex gap-x-2 py-6 max-w-[720px] mx-auto w-11/12 mt-[100px] items-center'>
                <button className='border px-4 py-1 rounded-md' onClick={() => navigation(-1)}>
                    Back
                </button>
                <h2>
                    Blogs Tagged <span className='font-bold text-orange-700'> #{tag}</span>
                </h2>
            </div>
            <div className='mb-20'>
                <Blogs />
            </div>

            <Pagination />

        </div>
    )
}

export default TagPage;
