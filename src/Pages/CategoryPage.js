import React from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header />
            <div className='flex gap-x-2 py-6 max-w-[720px] mx-auto w-11/12 mt-[100px] items-center'>
                <button className='border px-4 py-1 rounded-md'>
                    Back
                </button>
                <h2>Blogs On <span className='font-bold text-orange-700'>{category}</span></h2>
            </div>

            <div className='mb-20'>
                <Blogs />
            </div>

            <Pagination />
        </div>
    )
}

export default CategoryPage;
