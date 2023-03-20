import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import  { createBrowserRouter , RouterProvider } from "react-router-dom"
import { NotePage } from './components/[id]'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: `/note/:id`,
    element: <NotePage/> 
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
)
