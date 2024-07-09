
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'
import Login from './dashboard/pages/Login'
import ProtectDashboard from './middleware/ProtectDashboard'
import ProtectRole from './middleware/ProtectRole'
import Unable from './dashboard/pages/Unable'
import Addwriter from './dashboard/pages/Addwriter'
import Writers from './dashboard/pages/Writers'
import News from './dashboard/pages/News'
import Profile from './dashboard/pages/Profile'
import AddCategory from './dashboard/pages/AddCategory'
import WriterIndex from './dashboard/pages/WriterIndex'
import CreateNews from './dashboard/pages/CreateNews'
import storeContext from './context/storeContext'
import { useContext } from 'react'

function App() {

  const { store } = useContext(storeContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<ProtectDashboard/>}>
          <Route path='' element={<MainLayout/>}>
            <Route path='' element={store.userInfo?.role === 'admin'?<Navigate to='/dashboard/admin'/> : <Navigate to='/dashboard/writer'/>} />
            <Route path='unable-access' element={<Unable/>} />
            <Route path='news' element={<News/>} />
            <Route path='profile' element={<Profile/>} />
            

            <Route path='' element={<ProtectRole role='admin'/>}>
              <Route path='admin' element={<AdminIndex />} />
              <Route path='writer/add' element={<Addwriter />} />
              <Route path='writers' element={<Writers />} />
              <Route path='category/add' element={<AddCategory />} />
              <Route path='news/create' element={<CreateNews/>} />
            </Route>

            <Route path='' element={<ProtectRole role='writer'/>}>
              <Route path='writer' element={<WriterIndex/>} />
              <Route path='news/create' element={<CreateNews/>} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

/*
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'
import Login from './dashboard/pages/Login'
import ProtectDashboard from './middleware/ProtectDashboard'
import ProtectRole from './middleware/ProtectRole'
import Unable from './dashboard/pages/Unable'
import Addwriter from './dashboard/pages/Addwriter'
import Writers from './dashboard/pages/Writers'
import News from './dashboard/pages/News'
import Profile from './dashboard/pages/Profile'
import AddCategory from './dashboard/pages/AddCategory'
import WriterIndex from './dashboard/pages/WriterIndex'
import storeContext from './context/storeContext'
import CreateNews from './dashboard/pages/CreateNews'

function App() {

  const { store } = useContext(storeContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ProtectDashboard />}>
          <Route path='' element={<MainLayout />}>
            <Route path='' element={userInfo.role === 'admin' ? <Navigate to='/dashboard/admin' /> : <Navigate to='/dashboard/writer' />} />
            <Route path='unable-access' element={<Unable />} />
            <Route path='news' element={<News />} />
            <Route path='profile' element={<Profile />} />

            <Route path='' element={<ProtectRole role='admin' />}>
              <Route path='admin' element={<AdminIndex />} />
              <Route path='writer/add' element={<Addwriter />} />
              <Route path='writers' element={<Writers />} />
              <Route path='category/add' element={<AddCategory />} />
              <Route path='news/create' element={<CreateNews />} />
            </Route>

            <Route path='' element={<ProtectRole role='writer' />}>
              <Route path='writer' element={<WriterIndex />} />
              <Route path='news/create' element={<CreateNews />} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App



import { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'
import Login from './dashboard/pages/Login'
import ProtectDashboard from './middleware/ProtectDashboard'
import ProtectRole from './middleware/ProtectRole'
import Unable from './dashboard/pages/Unable'
import Addwriter from './dashboard/pages/Addwriter'
import Writers from './dashboard/pages/Writers'
import News from './dashboard/pages/News'
import Profile from './dashboard/pages/Profile'
import WriterIndex from './dashboard/pages/WriterIndex'
import CreateNews from './dashboard/pages/CreateNews'
import storeContext from './context/storeContext'
//import Edit_news from './dashboard/pages/Edit_news'

function App() {

  const { store } = useContext(storeContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ProtectDashboard />} >
          <Route path='' element={<MainLayout />}>
            <Route path='' element={store.userInfo?.role === 'admin' ? <Navigate to='/dashboard/admin' /> : <Navigate to='/dashboard/writer' />} />
            <Route path='unable-access' element={<Unable />} />
            <Route path='news' element={<News />} />
            <Route path='profile' element={<Profile />} />

            <Route path='' element={<ProtectRole role='admin' />} >
              <Route path='admin' element={<AdminIndex />} />
              <Route path='writer/add' element={<Addwriter />} />
              <Route path='writers' element={<Writers />} />
              <Route path='category/add' element={<AddCategory />} />
              <Route path='news/create' element={<CreateNews />} />
            </Route>

            <Route path='' element={<ProtectRole role='writer' />} >
              <Route path='writer' element={<WriterIndex />} />
              <Route path='news/create' element={<CreateNews />} />
              
            </Route>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
*/