import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'; 
import NavBar from './Components/NavBar'; 
import Landing from './Pages/Landing';
import Chemistry1010 from './Pages/Chemistry1010';
import Math990 from './Pages/Math990';
import Comm1020 from './Pages/Comm1020';
import Fashion1010 from './Pages/Fashion1010';
import Footer from './Components/Footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';


const Layout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,

    children: [
      {
        path: '/',
        element: <Landing/>
      }, 
      {
        path: '/chemistry1010',
        element: <Chemistry1010/>
      }, 
      {
        path: '/math990',
        element: <Math990/>
      }, 
      {
        path: '/comm1020',
        element: <Comm1020/>
      }, 
      {
        path: '/fashion1010',
        element: <Fashion1010/>
      }, 
      
    ]
  }
])


const App = () => {
  return (
   <>
  <RouterProvider router={router}></RouterProvider>


   </>
  );
}

export default App;