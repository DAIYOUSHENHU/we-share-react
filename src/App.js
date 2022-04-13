import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/views/login/Login'
import Register from '@/views/register/Register'

import BasicLayout from '@/layout/index';

import Dashboard from "@/views/dashboard"
import Askhelp from "@/views/ask-help/"
import Offerhelp from "@/views/offer-help"

import PageNotFound from '@/views/error/404.js'

import { Navigate } from 'react-router-dom'

export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="login/*" element={<Login />}></Route>
          <Route path="register/*" element={<Register />}></Route>
          <Route path="/layout/*" element={<BasicLayout />} >
            <Route path="*" element={<Navigate to="../dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="askhelp" element={<Askhelp />} />
            <Route path="offerhelp" element={<Offerhelp />} />
          </Route>
            
          <Route path="*" element={<PageNotFound />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}




