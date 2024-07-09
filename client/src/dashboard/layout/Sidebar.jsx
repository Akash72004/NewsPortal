/*
import React,{useContext} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiFillDashboard, AiOutlinePlus } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import { BiNews } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa'
import storeContext from '../../context/storeContext'
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()


  const { store, dispatch } = useContext(storeContext)

    const logout = () => {
        localStorage.removeItem('mewsToken')
        dispatch({ type: 'logout', payload: '' })
        navigate('/login')
    }

  const getLinkClasses = (linkPath) => {
    return `px-3 ${pathname === linkPath ? 'bg-white text-[#4040f6]' : 'bg-indigo-500 text-white'} py-2 hover:shadow-lg hover:shadow-indigo-5000/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-black hover:text-white text-lg font-bold`
  }

  return (
    <div className='w-[250px] h-screen fixed left-0 top-0 bg-white'>
      <div className='h-[70px] flex justify-center items-center mt-20'>
        <Link to='/'>
          <img src="https://static.vecteezy.com/system/resources/previews/006/584/760/original/illustration-graphic-cartoon-character-of-online-news-vector.jpg" alt="" />
        </Link>
      </div>
      <ul className='px-3 mt-[120px] flex flex-col gap-y-3 font-medium'>
        {
          store.userInfo?.role === "admin" ? <>
           <li>
          <Link to='/dashboard/admin' className={getLinkClasses('/dashboard/admin')}>
            <span className='text-xl pl-2'><AiFillDashboard /></span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to='/dashboard/news' className={getLinkClasses('/dashboard/news')}>
            <span className='text-xl pl-2'><BiNews /></span>
            <span>News</span>
          </Link>
        </li>
        <li>
          <Link to='/dashboard/writer/add' className={getLinkClasses('/dashboard/writer/add')}>
            <span className='text-xl pl-2'><AiOutlinePlus /></span>
            <span>Add Writer</span>
          </Link>
        </li>
        <li>
          <Link to='/dashboard/writers' className={getLinkClasses('/dashboard/writers')}>
            <span className='text-xl pl-2'><FiUsers /></span>
            <span>Writers</span>
          </Link>
        </li>
        <li>
          <Link to='/dashboard/category/add' className={getLinkClasses('/dashboard/category/add')}>
            <span className='text-xl pl-2'><AiOutlinePlus /></span>
            <span>Add Category</span>
          </Link>
        </li>
        <li>
          <Link to='/dashboard/news/create' className={getLinkClasses('/dashboard/news/create')}>
            <span className='text-xl pl-2'><FaPlus /></span>
            <span>Create News</span>
          </Link>
        </li>
        <li>
          <Link to='/dashboard/profile' className={getLinkClasses('/dashboard/profile')}>
            <span className='text-xl pl-2'><ImProfile /></span>
            <span>Profile</span>
          </Link>
        </li>
        <li>
            <div iv onClick={logout}  className=' bg-red-500 text-white py-2 hover:shadow-lg hover:shadow-indigo-5000/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-black hover:text-white text-lg font-bold'>
              <span className='text-xl ml-5'><IoLogOutOutline /></span>
                <span>Logout</span>
            </div>
        </li>
          </> 
          : 
          <> 
          <li>
          <Link to='/dashboard/writer' className={getLinkClasses('/dashboard/writer')}>
            <span className='text-xl pl-2'><AiFillDashboard /></span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to='/dashboard/news' className={getLinkClasses('/dashboard/news')}>
            <span className='text-xl pl-2'><BiNews /></span>
            <span>News</span>
          </Link>
        </li>
        <li>
          <Link to='/dashboard/news/create' className={getLinkClasses('/dashboard/news/create')}>
            <span className='text-xl pl-2'><FaPlus /></span>
            <span>Create News</span>
          </Link>
        </li>
        <li>
          <Link to='/dashboard/profile' className={getLinkClasses('/dashboard/profile')}>
            <span className='text-xl pl-2'><ImProfile /></span>
            <span>Profile</span>
          </Link>
        </li>
        <li>
            <div iv onClick={logout}  className=' bg-red-500 text-white py-2 hover:shadow-lg hover:shadow-indigo-5000/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-black hover:text-white text-lg font-bold'>
              <span className='text-xl ml-5'><IoLogOutOutline /></span>
                <span>Logout</span>
            </div>
        </li>
          </>
        }
        
      </ul>
    </div>
  )
}

export default Sidebar
*/

import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiFillDashboard, AiOutlinePlus } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import { BiNews } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { FaPlus } from 'react-icons/fa'
import storeContext from '../../context/storeContext'
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { store, dispatch } = useContext(storeContext)

  const logout = () => {
    localStorage.removeItem('mewsToken')
    dispatch({ type: 'logout', payload: '' })
    navigate('/login')
  }

  const getLinkClasses = (linkPath) => {
    return `px-3 ${pathname === linkPath ? 'bg-white text-[#4040f6]' : 'bg-indigo-500 text-white'} py-2 hover:shadow-lg hover:shadow-indigo-5000/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-black hover:text-white text-lg font-bold`
  }

  return (
    <div className='w-[250px] h-screen fixed left-0 top-0 bg-white'>
      <div className='h-[70px] flex justify-center items-center mt-20'>
        <Link to='/'>
          <img src="https://static.vecteezy.com/system/resources/previews/006/584/760/original/illustration-graphic-cartoon-character-of-online-news-vector.jpg" alt="" />
        </Link>
      </div>
      <ul className='px-3 mt-[120px] flex flex-col gap-y-3 font-medium'>
        {store.userInfo?.role === "admin" ? (
          <>
            <li>
              <Link to='/dashboard/admin' className={getLinkClasses('/dashboard/admin')}>
                <span className='text-xl pl-2'><AiFillDashboard /></span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard/news' className={getLinkClasses('/dashboard/news')}>
                <span className='text-xl pl-2'><BiNews /></span>
                <span>News</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard/writer/add' className={getLinkClasses('/dashboard/writer/add')}>
                <span className='text-xl pl-2'><AiOutlinePlus /></span>
                <span>Add Writer</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard/writers' className={getLinkClasses('/dashboard/writers')}>
                <span className='text-xl pl-2'><FiUsers /></span>
                <span>Writers</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard/category/add' className={getLinkClasses('/dashboard/category/add')}>
                <span className='text-xl pl-2'><AiOutlinePlus /></span>
                <span>Add Category</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard/news/create' className={getLinkClasses('/dashboard/news/create')}>
                <span className='text-xl pl-2'><FaPlus /></span>
                <span>Create News</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard/profile' className={getLinkClasses('/dashboard/profile')}>
                <span className='text-xl pl-2'><ImProfile /></span>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <div onClick={logout} className=' bg-red-500 text-white py-2 hover:shadow-lg hover:shadow-indigo-5000/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-black hover:text-white text-lg font-bold'>
                <span className='text-xl ml-5'><IoLogOutOutline /></span>
                <span>Logout</span>
              </div>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/dashboard/writer' className={getLinkClasses('/dashboard/writer')}>
                <span className='text-xl pl-2'><AiFillDashboard /></span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard/news' className={getLinkClasses('/dashboard/news')}>
                <span className='text-xl pl-2'><BiNews /></span>
                <span>News</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard/news/create' className={getLinkClasses('/dashboard/news/create')}>
                <span className='text-xl pl-2'><FaPlus /></span>
                <span>Create News</span>
              </Link>
            </li>
            <li>
              <Link to='/dashboard/profile' className={getLinkClasses('/dashboard/profile')}>
                <span className='text-xl pl-2'><ImProfile /></span>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <div onClick={logout} className=' bg-red-500 text-white py-2 hover:shadow-lg hover:shadow-indigo-5000/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-black hover:text-white text-lg font-bold'>
                <span className='text-xl ml-5'><IoLogOutOutline /></span>
                <span>Logout</span>
              </div>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default Sidebar
