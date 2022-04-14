import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '@/views/login/Login'
import Register from '@/views/register/Register'

import BasicLayout from '@/layout/index';

import Dashboard from "@/views/dashboard"
import Sharegood from "@/views/share-good"
import Askhelp from "@/views/ask-help/"
import Offerhelp from "@/views/offer-help"
import Personnal from "@/views/personal"
import Goodmanage from "@/views/good-manage"
import Sysmanage from "@/views/sys-manage"

import PageNotFound from '@/views/error/404.js'

import { Navigate } from 'react-router-dom'

export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="layout" element={<BasicLayout />} >
            <Route path="" element={<Navigate to="../dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="sharegood" element={<Sharegood />} />
            <Route path="askhelp" element={<Askhelp />} />
            <Route path="offerhelp" element={<Offerhelp />} />
            <Route path="personal" element={<Personnal />} />
            <Route path="managegood" element={<Goodmanage />} />
            <Route path="managesys" element={<Sysmanage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
            
          <Route path="*" element={<PageNotFound />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}




