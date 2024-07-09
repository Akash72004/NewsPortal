
import React, { useContext } from 'react';
import gif from '../../assets/login.mp4';
import { base_url } from '../../config/config';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast'
import storeContext from '../../context/storeContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate()
  const {dispatch} = useContext(storeContext)
  const [loader, setLoader] = useState(false)
  
  const [state, setState] = useState({
    email : "",
    password : ""
  })

  const inputHandle = (e) => {
    setState({...state, [e.target.name] : e.target.value})
  }

  const submit = async(e) => {
    e.preventDefault();
    try 
    {
      setLoader(true)
      const { data } = await axios.post(`${base_url}/api/login`, state);
      setLoader(false)
      localStorage.setItem('newsToken',data.token)
      toast.success(data.message)
      dispatch({
        type : "Login_success",
        payload : {
          token : data.token
        }
      })
      navigate('/dashboard')
    } 
    catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
    }
  };
  
  return (
    <div className='flex h-screen font-sans bg-[#d1e7e0]'>

      <div className='flex-1 bg-white flex items-center justify-center rounded-r-full overflow-hidden'>
        <video className='w-full h-full object-cover' src={gif} autoPlay loop muted />
      </div>

      <div className='flex-1 flex flex-col justify-center items-center bg-[#d1e7e0] p-5'>
        <div className='w-80 text-center bg-[#d1e7e0] border-[4px] border-gray-300 p-10 rounded-lg '>
          <h2 className='text-4xl text-gray-700 font-bold'>Login</h2>
          
          <form onSubmit={submit}>
            <label className='block mt-5 font-bold text-left text-xs text-gray-600'>Username or Email</label>
            <input onChange={inputHandle} value={state.email} required type="email"name='email' placeholder="Enter your username or email" className='w-full p-2 mt-1 border border-[#bdc3c7] rounded-md'/>
            <label className='block mt-5 font-bold text-left text-xs text-gray-600'>Password</label>
            <input onChange={inputHandle} value={state.password} required type="password" name='password' placeholder="Enter your password" className='w-full p-2 mt-1 border border-[#bdc3c7] rounded-md'/>
            <button disabled={loader} className='w-full p-2 bg-indigo-500 text-white rounded-full mt-5 cursor-pointer'>{loader ? "Loading..." : 'Login.'}</button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
