import './App.css';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar.js';
import Home from './screens/Home.js';
import Footer from './components/Footer.js';
import Login from './screens/Login.js';
import SignUp from './screens/SignUp.js';
import Orders from './screens/Orders.js';
import { useEffect } from 'react';
function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/><Footer/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/signup",
      element:<><Navbar/><SignUp/></>
    },
    {
      path:"/order",
      element:<><Navbar/><Orders/><Footer/></>
    }
  ]
  )
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
