

import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='min-w-screen min-h-screen bg-zinc-300 flex'>
        <Sidebar/>
        <div className='ml-[250px] w-[calc(100vw-250px)] min-h-[vh]'>
            <Header/>
            <div className='p-4'>
                <div className='pt-[20px]'>
                    <Outlet/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainLayout
