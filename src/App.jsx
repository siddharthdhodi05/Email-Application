import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Sidebar from './components/Sidebar'
import Inbox from './components/Inbox'
import Body from './components/Body'
import Mail from './components/Mail'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Inbox/>
      },
      {
        path:"/mail/:id",
        element:<Mail/>
      }
    ]
  }
])

function App() {
  return (
    <div className=" bg-slate-50 h-screen w-screen overflow-hidden">
      <Navbar />
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
