import React from 'react';
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='mt-14 py-14'>
                <Blogs />
            </div>
            <Pagination />
        </div>
    )
}

export default Home;
