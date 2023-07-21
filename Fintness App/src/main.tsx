import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './Components/Home.tsx'
import About from './Components/About.tsx'
import Blog from './Components/Blog.tsx'
import Contact from './Components/Contact.tsx'
import Login from './Components/Login.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'About',
    element: <About/>
  },
  {
    path: 'Blog',
    element: <Blog/>
  },
  {
    path: 'Contact',
    element: <Contact/>
  },
  {
    path:'login',
    element: <Login/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
