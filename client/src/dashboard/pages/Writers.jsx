import React, {useEffect, useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import axios from 'axios'
import { base_url } from '../../config/config'
import storeContext from '../../context/storeContext'


const Writers = () => {

  const { store } = useContext(storeContext)
  const [writers, setWriters] = useState([])

  const get_writers = async () => {
    try {

      const { data } = await axios.get(`${base_url}/api/news/writers`, {
        headers: {
          'Authorization': `Bearer ${store.token}`
        }
      })
      setWriters(data.writers)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    get_writers()
  }, [])


  return (
    <div className='bg-gray-800 p-4 rounded-md text-white'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Writers</h2>
          <Link
          to='/dashboard/writer/add'
          className='px-4 py-2 bg-purple-500 text-white rounded-full font-medium hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-150 ease-in-out'
        >
          Add Writer
        </Link>
      </div>
      <div className='p-4'> 
      <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-400'>
                <thead className='text-xs uppercase bg-gray-800 text-gray-400'>
                    <tr>
                        <th className='px-7 py-3'>No</th>
                        <th className='px-7 py-3'>Name</th>
                        <th className='px-7 py-3'>Category</th>
                        <th className='px-7 py-3'>Role</th>
                        <th className='px-7 py-3'>Profile</th>
                        <th className='px-7 py-3'>Email</th>
                        <th className='px-7 py-3'>Active</th>
                    </tr>
                </thead>
                <tbody>
                {    
                    writers.map((r, i) =>
                        <tr key={i} className='bg-gray-700 border-b text-gray-400 font-bold'>
                        <td className='px-6 py-4'>{i + 1}</td>
                        <td className='px-6 py-4'>{r.name}</td>
                        <td className='px-6 py-4'>{r.category}</td>
                        <td className='px-6 py-4'>{r.role}</td>
                        <td className='px-6 py-4 w-[50px] h-[50px]'><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="img"/></td>
                        <td className='px-6 py-4'>{r.email}</td>
                        <td className='px-6 py-4'>
                            <div className='flex justify-start items-center gap-x-4 text-black'>
                                <Link to={`/dashboard/writer/${r._id}`} className='p-[6px] bg-green-500 rounded houver:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
                            </div>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Writers