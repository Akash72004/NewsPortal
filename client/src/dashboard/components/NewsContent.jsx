import React from 'react'
import { Link } from 'react-router-dom'
import {FaEye, FaTrash, FaEdit, FaSearch} from 'react-icons/fa'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const NewsContent = () => {
  return (
    <div className='bg-gray-800 p-4 rounded-md'>
        <div className='flex items-center mb-4'>
            <select name="" className='mr-4 px-3 py-2 rounded-sm outline-0 border border-gray-600 focus:border-indigo-500 h-10 bg-gray-700 text-white' id="">
                <option value="">Select Category</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
            </select>

            <input type="text"  placeholder='Search News' className=' px-3 py-2 rounded-sm outline-0 border border-gray-600 focus:border-indigo-500 h-10 bg-gray-700 text-white'/>
            
            <select name="" className='mr-4 ml-4 px-3 py-2 rounded-sm outline-0 border border-gray-600 focus:border-indigo-500 h-10 bg-gray-700 text-white' id="">
                <option value="">Filter By</option>
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="Most Popular">Most Popular</option>
            </select>
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
                    <tr className='bg-gray-700 border-b text-gray-400 font-bold'>
                        <td className='px-6 py-4'>1</td>
                        <td className='px-6 py-4'>NEET-UG 2024 Latest Update</td>
                        <td className='px-6 py-4 w-[220px] h-[110px]'><img src="https://www.financialexpress.com/wp-content/uploads/2024/06/NEET-protests-PTI.jpg?w=1024" alt=""/></td>
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
        <div className='flex items-center justify-end px-10 gap-x-3 text-xs text-gray-400'>
            <div className='flex gap-x-3 justify-center items-center'>
                <p className='px-4 py-3 font-semibold'>News per Page</p>
                <select name='category' id='category' className='px-2 py-1 mt-2 rounded-sm bg-gray-700 text-white outline-0 border focus:border-green-500 h-10'>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                </select>
            </div>
            <p className='px-6 py-3 font-semibold'>6/22 - of 5</p>
            <div className='flex items-center gap-x-3'>
                <IoIosArrowBack className='w-5 h-5 cursor-pointer'/>
                <IoIosArrowForward className='w-5 h-5 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default NewsContent
