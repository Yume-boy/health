import React, {useEffect} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'

const AppLayout = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);


  return (
    <div>
      <NavBar />
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default AppLayout
