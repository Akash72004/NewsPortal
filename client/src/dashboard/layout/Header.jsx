
import React, { useContext } from 'react'
import profile from '../../assets/profile.png'
import storeContext from '../../context/storeContext'

const Header = () => {
  const {store} = useContext(storeContext)
  return (
    <div className='h-[75px] bg-white shadow-md flex justify-between items-center px-2'>
        <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-white'>
            <input type='text' placeholder='SEARCH' className='px-3 py-2 rounded-full outline-0 border border-gray-300 focus:border-indigo-500 h-10'/>
      

            <div className='mr-4'>
                <div className='flex gap-x-2'>
                    <div className='flex flex-col justify-center items-end'>
                        <span className='text-xl font-bold'>{store.userInfo?.name}</span>
                        <span>{store.userInfo?.role}</span>
                    </div>
                    <img className='w-26 h-14 rounded-full'src={profile} alt="Pfp" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
