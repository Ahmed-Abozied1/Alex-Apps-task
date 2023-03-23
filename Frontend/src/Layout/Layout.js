import React from 'react'
import NavBar from './NavBar/NavBar'

const Layout = ({children}) => {
  return (
    <div className=' text-black'>
    <NavBar/>
    {children}
 
</div>
  )
}

export default Layout