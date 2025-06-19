import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
const About = React.lazy(()=> import ('./components/About.jsx'))
const Contact = React.lazy(()=> import ('./components/Contact.jsx'))



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  
    children : [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:
      <Suspense fallback={<div>Loading...</div>}>
        <About/>
      </Suspense>
    },
    {
      path:'/contact',
      element:
      <Suspense fallback={<div>Loading...</div>}>
      <Contact/>
      </Suspense>
    },
   
  ]
}
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>
)
