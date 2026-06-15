import React from 'react'
import Astrology from './components/Astrology'
import Maincontainer from './components/Maincontainer'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Account from './components/Account'
import Vaastu from './components/Vaastu'
import Poojan from './components/Poojan'


const appRouter = createBrowserRouter([{
  path : "/",
  element:<Layout />,

  children:[{
    path:"/",
    element : <Maincontainer />
  },{
    path : "/contact",
    element : <Contact />
  },{
    path : "/account",
    element : <Account />
  },{
    path : "/astrology",
    element : <Astrology />
  },{
    path : "/vastu",
    element : <Vaastu />
  },{
    path : "/poojan",
    element : <Poojan />
  }]
}])
const App = () => {
  return (
     <RouterProvider router={appRouter}/> 
  )
}

export default App