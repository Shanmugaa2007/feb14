import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './index.css'
import ValentineProposal from './Valentine'
import AcceptedPage from './AcceptPage'

const router = createBrowserRouter([
  {
    path:'/',
    element:<ValentineProposal/>
  },
  {
    path:'/accepted',
    element:<AcceptedPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
