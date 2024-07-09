import React from 'react'
import { Link } from 'react-router-dom'
import {FaEye, FaTrash, FaEdit} from 'react-icons/fa'

const AdminIndex = () => {
  return (
    <div className='mt-3'>
      <div className='grid grid-cols-5 gap-x-4'>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-gray-700 text-white'>
          <span className='text-xl font-bold'>50</span>
          <span className='text-md'>Total News</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-gray-700 text-white'>
          <span className='text-xl font-bold'>50</span>
          <span className='text-md'>Pending News</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-gray-700 text-white'>
          <span className='text-xl font-bold'>50</span>
          <span className='text-md'>Active News</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-gray-700 text-white'>
          <span className='text-xl font-bold'>50</span>
          <span className='text-md'>Deactive News</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-md items-center gap-y-2 bg-gray-700 text-white'>
          <span className='text-xl font-bold'>50</span>
          <span className='text-md'>Writers</span>
        </div>
      </div>
      <div className='bg-gray-800 p-4 mt-5 text-white'>
        <div className='flex justify-between items-center pb-4'>
          <h2 className='text-white font-bold'>Recent News</h2>
          <Link>View all</Link>
        </div>
        <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-400'>
                <thead className='text-xs uppercase bg-gray-800 text-gray-400'>
                    <tr>
                        <th className='px-7 py-3'>No</th>
                        <th className='px-7 py-3'>Title</th>
                        <th className='px-7 py-3'>Image</th>
                        <th className='px-7 py-3'>Category</th>
                        <th className='px-7 py-3'>Description</th>
                        <th className='px-7 py-3'>Date</th>
                        <th className='px-7 py-3'>Status</th>
                        <th className='px-7 py-3'>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add rows dynamically here */}
                    <tr className='bg-gray-700 border-b text-gray-400 font-bold'>
                        <td className='px-6 py-4'>1</td>
                        <td className='px-6 py-4'>NEET-UG 2024 Latest Update</td>
                        <td className='px-6 py-4'><img src="https://www.financialexpress.com/wp-content/uploads/2024/06/NEET-protests-PTI.jpg?w=1024" alt=""/></td>
                        <td className='px-6 py-4'>Education</td>
                        <td className='px-6 py-4'>Bihar police finds 68 questions matching original exam paper</td>
                        <td className='px-6 py-4'>June 22,2024</td>
                        <td className='px-6 py-4'>
                            <span className='px-2 py-[2px] bg-green-500 text-white rounded-sm cursor-pointer'>active</span>
                        </td>
                        <td className='px-6 py-4'>
                            <div className='flex justify-start items-center gap-x-4 text-black'>
                                <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
                                <Link className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50'><FaEdit/></Link>
                                <div className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'><FaTrash/></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default AdminIndex