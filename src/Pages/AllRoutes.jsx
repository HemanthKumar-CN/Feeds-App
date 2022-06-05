import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../component/Navbar'
import PrivateRoute from '../component/PrivateRoute'
import Home from './Home'
import Login from './Login'
import UserPage from './UserPage'
import Users from './Users'

export const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/users' element={<PrivateRoute> 
                <Users/> </PrivateRoute>} />
            <Route path='/users/:id' element={<PrivateRoute> 
                <UserPage/> </PrivateRoute>} />
        </Routes>
    </div>
  )
}
