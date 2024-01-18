import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Authentication/login'
import { Signup } from '../Authentication/signup'

function Router() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default Router