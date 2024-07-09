import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import toast from 'react-hot-toast';
import axios from 'axios';
import { base_url } from '../../config/config';
import storeContext from '../../context/storeContext';

const AddWriter = () => {
  const navigate = useNavigate();
  const { store } = useContext(storeContext);

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    category: ""
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const [loader, setLoader] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const { data } = await axios.post(`${base_url}/api/news/writer/add`, state, {
        headers: {
          'Authorization': `Bearer ${store.token}`
        }
      });
      setLoader(false);
      toast.success(data.message);
      navigate('/dashboard/writers');
    } catch (error) {
      setLoader(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='bg-gray-800 p-4 rounded-md text-white'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Add Writers</h2>
        <Link
          to='/dashboard/writers'
          className='px-4 py-2 bg-purple-500 text-white rounded-full font-medium hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-150 ease-in-out'
          aria-label='Writers'
        >
          Writers
        </Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-200' htmlFor="name">Name</label>
              <input onChange={inputHandler} value={state.name} required type="text" placeholder='Name' name='name' className='px-3 py-2 rounded-md outline-0 border border-gray-600 focus:border-indigo-500 h-10 bg-gray-700 text-white' id='name'/>
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-200' htmlFor="category">Category</label>
              <select onChange={inputHandler} value={state.category} name="category" id='category' placeholder='Search News' className='px-3 py-2 rounded-md outline-0 border border-gray-600 focus:border-indigo-500 h-10 bg-gray-700 text-white'>
                <option value="">---Select Category---</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Politics">Politics</option>
                <option value="Travel">Travel</option>
                <option value="Hollywood">Hollywood</option>
                <option value="Sports">Sports</option>
                <option value="International">International</option>
                <option value="Technology">Technology</option>
              </select>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-200' htmlFor="email">Email</label>
              <input onChange={inputHandler} value={state.email} required type="email" placeholder='email' name='email' className='px-3 py-2 rounded-md outline-0 border border-gray-600 focus:border-indigo-500 h-10 bg-gray-700 text-white' id='email'/>
            </div>
            
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-200' htmlFor="password">Password</label>
              <input onChange={inputHandler} value={state.password} required type="password" placeholder='password' name='password' className='px-3 py-2 rounded-md outline-0 border border-gray-600 focus:border-indigo-500 h-10 bg-gray-700 text-white' id='password'/>
            </div>
          </div>
          <div className='mt-4'>
            <button disabled={loader} className='flex items-center px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-150 ease-in-out'>
              <AiOutlinePlus className='mr-2' />
             {loader ? 'Loading...' : 'Add Writer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddWriter;
