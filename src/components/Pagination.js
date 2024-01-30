import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Pagination = () => {

  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className='w-full fixed justify-center flex border-4 bottom-0 py-3 bg-gray-100 shadow-md'>
      {/* <div className=' w-full flex justify-center fixed border-4 shadow-xl bottom-0 py-3 bg-white'> */}
      {/* <div className='w-11/12 max-w-[720px] justify-between flex py-2'> */}
      <div className='flex items-center justify-between w-11/12 max-w-[720px]'>

        <div className='flex gap-x-2'>

          {page > 1 &&
            (<button
              className='rounded-md border-2 px-4 py-2'
              onClick={() => handlePageChange(page - 1)}>
              Previous
            </button>)
          }

          {page < totalPages &&
            (<button
              className='rounded-md border-2 px-4 py-2'
              onClick={() => handlePageChange(page + 1)}>
              Next
            </button>)
          }

        </div>

        <p className='font-medium text-sm py-2'>
          Page {page} of {totalPages}
        </p>

      </div>
    </div>
  )
}

export default Pagination;
