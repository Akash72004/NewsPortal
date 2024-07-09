import React from 'react'
import {FaImage} from 'react-icons/fa'

const Profile = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-x-6 mt-5'>
      <div className='bg-gray-700 gap-x-3 p-6 flex rounded justify-center items-center'>
        <div>
          <label htmlFor='img' className={'w-[250px] h-[250px] flex rounded text-gray-400 gap-2 justify-center items-center cursor-pointer border-2 border-dashed'}>
            <div className='flex justify-center items-center flex-col gap-y-2'> 
              <span className='text-2xl'><FaImage/></span>
              <span>Select Image</span>
            </div>
          </label>
          <input className='hidden' type='file' id='img'/>
        </div>
        <div className='ml-5 text-gray-400 flex flex-col gap-y-1 justify-center items-start'>
          <span className='text-xl font-bold'>ADMIN</span>
          <span>Name : John Channing</span>
          <span>email : john123@gmail.com</span>
          <span>Category : All</span>
          <span>Since : Jan,2022</span>
          <span>Status : Active</span>
        </div>
      </div>


      <div className='bg-gray-700 px-6 py-4 rounded text-gray-400'>
        <h2 className='pb-3 text-center'>Change Password</h2>

        <form>
          <div>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-200' htmlFor="old_password">Old Password</label>
              <input type="password" placeholder='old_password' name='old_password' className='px-3 py-2 rounded-md outline-0 border border-gray-600 focus:border-indigo-500 h-10 bg-gray-700 text-white' id='name'/>
            </div>
            
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-200' htmlFor="new_password">New Password</label>
              <input type="password" placeholder='new_password' name='new_password' className='px-3 py-2 rounded-md outline-0 border border-gray-600 focus:border-indigo-500 h-10 bg-gray-700 text-white' id='name'/>
            </div>
          </div>
          <div className='mt-4'>
              <button className='px-3 py-[6px] bg-blue-500 rounded-full text-white font-bold hover:bg-blue-700'>Change Password</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Profile