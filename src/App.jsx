import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Astrology from './components/Astrology'
import Maincontainer from './components/Maincontainer'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Account from './components/Account'
import Vaastu from './components/Vaastu'
import Poojan from './components/Poojan'
import KundaliMilan from './Pages/KundaliMilan'
import Panchang from './Pages/Panchang'
import KundaliPage from './Pages/KundaliPage'

import Mahadasha from './components/dasha/Mahadasha'
import CurrentMD from './components/dasha/CurrentMD'
import CurrentFullMD from './components/dasha/CurrentFullMD'
import DainikRashifal from './Pages/DainikRashifal'
import Rashifal from './Pages/Rashifal'
import MasikRashifal from './Pages/MasikRashifal'
import Numerology from './components/Numrology/Numerology'
import LalKitab from './components/lalKitabAstro/LalKitab'
import KpFile from './components/kpAstro/KpFile'
import Reports from './components/Reports/Reports'

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
  },
{
  path: "/kundaliMilan",
  element : <KundaliMilan />
},
{
  path: "/panchang",
  element : <Panchang />
},
{
  path:"/kundali",
  element : <KundaliPage />
},{
  path:"/current_mahadasha",
  element : <CurrentMD />
},{
  path:"/current_full_mahadasha",
  element : <CurrentFullMD />
}
,{
  path:"/rashifal",
  element : <Rashifal />
},{
  path:"/dainik_rashifal",
  element : <DainikRashifal />
},
{
  path:"/dainik_rashifal/:rashi",
  element:<DainikRashifal />
},{
  path:"/masik_rashifal",
  element : <MasikRashifal />
},
{
  path:"/masik_rashifal/:rashi",
  element:<MasikRashifal />
},{
  path:"/numerology",
  element:<Numerology />
},{
  path:'/lalKitab',
  element:<LalKitab />
},{
  path:'/kpAstrology',
  element:<KpFile />
 
},{
  path:'report',
  element:<Reports />
}]
}])
const App = () => {
  return (
     <RouterProvider router={appRouter}/> 
     
  )
}

export default App