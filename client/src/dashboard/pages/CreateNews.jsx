/*import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdCloudUpload } from 'react-icons/md'
import JoditEditor from 'jodit-react'
import { FaPlus } from 'react-icons/fa'
import Gallery from '../components/Gallery'
import {base_url} from '../../config/config'
import axios from 'axios'
import storeContext from '../../context/storeContext'
import toast from 'react-hot-toast'


const CreateNews = () => {
  
    const {store} = useContext(storeContext)
    const [show, setShow] = useState(false)
    const editor = useRef(null)

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')

    const [loader, setLoader] = useState(false)

    const imageHandle = (e) => {

        const { files } = e.target

        if (files.length > 0) {
            setImg(URL.createObjectURL(files[0]))
            setImage(files[0])
        }
    }

    const added = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', image)

        try {
            setLoader(true)
            const { data } = await axios.post(`${base_url}/api/news/add`, formData, {
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            })
            setLoader(false)
            console.log(data)
            toast.success(data.message)
        } catch (error) {
            setLoader(false)
            toast.success(error.response.data.message)
        }
    }
    
    return (
    <div className='bg-gray-800 rounded-md p-4'>
    <div className='flex justify-between items-center mb-4'>
      <h2 className='text-xl font-medium text-white'>Add News</h2>
      <Link className='px-3 py-[6px] bg-purple-500 rounded-full text-white hover:bg-purple-600' to='/dashboard/news'>News</Link>
    </div>

    <div className='p-4'>
        <form onSubmit={added}>

            <div className='flex flex-col gap-y-2 mb-6'>
                <label className='text-md font-medium text-white font-bold' htmlFor='title'>Title</label>
                <input required value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Title' name='title' className='w-full px-3 py-2 border border-gray-300 rounded-md border border-gray-300 focus:border-green-500 h-10'></input>
            </div>

            <div className='mb-6'>
                <div>
                <label htmlFor='img' className={'w-full h-[350px] flex rounded text-gray-400 gap-2 justify-center items-center cursor-pointer border-2 border-dashed'}>
                    {
                        img ? <img src={img} className='w-full h-full' alt='image'/> : <div className='flex justify-center items-center flex-col gap-y-2'> 
                        <span className='text-2xl'><MdCloudUpload/></span>
                        <span>Select Image</span>
                    </div>
                    }
                </label>
                <input required onChange={imageHandle} className='hidden' type='file' id='img'/>
                </div>
            </div>

            <div className='flex flex-col gap-y-2 mb-6'>
                <div className='flex justify-start items-center gap-x-2'>
                    <h2 className='text-white font-bold'>Description</h2>
                    <div onClick={()=>setShow(true)}>
                        <span className='text-2xl text-white cursor-pointer'><MdCloudUpload/></span>
                    </div>
                </div>
                <div>
                    <JoditEditor
                    ref={editor}
                    value={description}
                    tabIndex={1}
                    onBlur={value => setDescription(value)}
                    onChange={() => { }}
                    />
                </div>
                <div className='mt-4'>
                    <button className='flex items-center px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-150 ease-in-out'>
                    <FaPlus className='mr-2' />
                    Create News
                    </button>
          </div>
            </div>

        </form>
    </div>

    {
        show && <Gallery setShow={setShow} images={[]} /> 
    }
    
  </div>
  )
}

export default CreateNews



import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdCloudUpload } from 'react-icons/md'
import JoditEditor from 'jodit-react'
import { FaPlus } from 'react-icons/fa'
import Gallery from '../components/Gallery'
import { base_url } from '../../config/config'
import axios from 'axios'
import storeContext from '../../context/storeContext'
import toast from 'react-hot-toast'

const CreateNews = () => {
    const { store } = useContext(storeContext)
    const [show, setShow] = useState(false)
    const editor = useRef(null)

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')

    const [loader, setLoader] = useState(false)

    const imageHandle = (e) => {
        const { files } = e.target
        if (files.length > 0) {
            setImg(URL.createObjectURL(files[0]))
            setImage(files[0])
        }
    }

    const added = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', image)

        try {
            setLoader(true)
            const { data } = await axios.post(`${base_url}/api/news/add`, formData, {
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            })
            setLoader(false)
            console.log(data)
            toast.success(data.message)
        } catch (error) {
            setLoader(false)
            console.error('Error adding news:', error)

            if (error.response && error.response.data) {
                toast.error(error.response.data.message)
            } else if (error.request) {
                toast.error('No response from server. Please try again later.')
            } else {
                toast.error('Error: ' + error.message)
            }
        }
    }

    return (
        <div className='bg-gray-800 rounded-md p-4'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-medium text-white'>Add News</h2>
                <Link className='px-3 py-[6px] bg-purple-500 rounded-full text-white hover:bg-purple-600' to='/dashboard/news'>News</Link>
            </div>

            <div className='p-4'>
                <form onSubmit={added}>
                    <div className='flex flex-col gap-y-2 mb-6'>
                        <label className='text-md font-medium text-white font-bold' htmlFor='title'>Title</label>
                        <input required value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Title' name='title' className='w-full px-3 py-2 border border-gray-300 rounded-md border border-gray-300 focus:border-green-500 h-10'></input>
                    </div>

                    <div className='mb-6'>
                        <div>
                            <label htmlFor='img' className={'w-full h-[350px] flex rounded text-gray-400 gap-2 justify-center items-center cursor-pointer border-2 border-dashed'}>
                                {img ? <img src={img} className='w-full h-full' alt='image' /> : <div className='flex justify-center items-center flex-col gap-y-2'>
                                    <span className='text-2xl'><MdCloudUpload /></span>
                                    <span>Select Image</span>
                                </div>}
                            </label>
                            <input required onChange={imageHandle} className='hidden' type='file' id='img' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-2 mb-6'>
                        <div className='flex justify-start items-center gap-x-2'>
                            <h2 className='text-white font-bold'>Description</h2>
                            <div onClick={() => setShow(true)}>
                                <span className='text-2xl text-white cursor-pointer'><MdCloudUpload /></span>
                            </div>
                        </div>
                        <div>
                            <JoditEditor
                                ref={editor}
                                value={description}
                                tabIndex={1}
                                onBlur={newContent => setDescription(newContent)}
                                onChange={() => { }}
                            />
                        </div>
                        <div className='mt-4'>
                            <button type='submit' className='flex items-center px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-150 ease-in-out'>
                                <FaPlus className='mr-2' />
                                {loader ? 'Creating...' : 'Create News'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {show && <Gallery setShow={setShow} images={[]} />}
        </div>
    )
}

export default CreateNews
*/

import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdCloudUpload } from 'react-icons/md'
import JoditEditor from 'jodit-react'
import { FaPlus } from 'react-icons/fa'
import Gallery from '../components/Gallery'
import { base_url } from '../../config/config'
import axios from 'axios'
import storeContext from '../../context/storeContext'
import toast from 'react-hot-toast'

const CreateNews = () => {
    const { store } = useContext(storeContext)
    const [show, setShow] = useState(false)
    const editor = useRef(null)

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')

    const [loader, setLoader] = useState(false)

    const imageHandle = (e) => {
        const { files } = e.target
        if (files.length > 0) {
            setImg(URL.createObjectURL(files[0]))
            setImage(files[0])
        }
    }

    const added = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('image', image)

        try {
            setLoader(true)
            const { data } = await axios.post(`${base_url}/api/news/add`, formData, {
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            })
            setLoader(false)
            console.log(data)
            toast.success(data.message)
        } catch (error) {
            setLoader(false)
            toast.error(error.response.data.message)
        }
    }

    return (
        <div className='bg-gray-800 rounded-md p-4'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-medium text-white'>Add News</h2>
                <Link className='px-3 py-[6px] bg-purple-500 rounded-full text-white hover:bg-purple-600' to='/dashboard/news'>News</Link>
            </div>

            <div className='p-4'>
                <form onSubmit={added}>
                    <div className='flex flex-col gap-y-2 mb-6'>
                        <label className='text-md font-medium text-white font-bold' htmlFor='title'>Title</label>
                        <input required value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Title' name='title' className='w-full px-3 py-2 border border-gray-300 rounded-md border border-gray-300 focus:border-green-500 h-10'></input>
                    </div>

                    <div className='mb-6'>
                        <div>
                            <label htmlFor='img' className={'w-full h-[350px] flex rounded text-gray-400 gap-2 justify-center items-center cursor-pointer border-2 border-dashed'}>
                                {img ? <img src={img} className='w-full h-full' alt='image' /> : <div className='flex justify-center items-center flex-col gap-y-2'>
                                    <span className='text-2xl'><MdCloudUpload /></span>
                                    <span>Select Image</span>
                                </div>}
                            </label>
                            <input required onChange={imageHandle} className='hidden' type='file' id='img' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-2 mb-6'>
                        <div className='flex justify-start items-center gap-x-2'>
                            <h2 className='text-white font-bold'>Description</h2>
                            <div onClick={() => setShow(true)}>
                                <span className='text-2xl text-white cursor-pointer'><MdCloudUpload /></span>
                            </div>
                        </div>
                        <div>
                            <JoditEditor
                                ref={editor}
                                value={description}
                                tabIndex={1}
                                onBlur={newContent => setDescription(newContent)}
                                onChange={() => { }}
                            />
                        </div>
                        <div className='mt-4'>
                            <button type='submit' className='flex items-center px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-150 ease-in-out'>
                                <FaPlus className='mr-2' />
                                {loader ? 'Creating...' : 'Create News'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {show && <Gallery setShow={setShow} images={[]} />}
        </div>
    )
}

export default CreateNews