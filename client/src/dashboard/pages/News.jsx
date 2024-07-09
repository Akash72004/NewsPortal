
import React from 'react'
import { Link } from 'react-router-dom'
import NewsContent from '../components/NewsContent'

const News = () => {

  const userInfo = {
    role: "admin"
  }

  return (
    <div className='bg-gray-800 rounded-md p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-medium text-white'>News</h2>
        {
          userInfo.role === 'admin' &&
          <Link
            to='/dashboard/news/create'
            className='px-4 py-2 bg-purple-500 text-white rounded-full font-medium hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-150 ease-in-out'
            aria-label='Create News'
          >
            Create News
          </Link>
        }
      </div>
      <NewsContent/>
    </div>
  )
}

export default News
