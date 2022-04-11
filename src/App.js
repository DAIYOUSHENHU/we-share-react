import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/views/login/Login'
import Register from '@/views/register/Register'

import BasicLayout from '@/layout/index';

import PageNotFound from '@/views/error/404.js'


export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<BasicLayout />} ></Route>
          <Route path="*" element={<PageNotFound />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}




