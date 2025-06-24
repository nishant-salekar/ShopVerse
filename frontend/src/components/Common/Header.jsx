import React from 'react'
import Navbar from './Navbar'
import Topbar from '../Layout/Topbar'

const Header = () => {
  return (
    <header className="border-b border-gray-400">
    {/* Topbar */}
    <Topbar />
    {/* navbar */}
    <Navbar />
    {/* Cart Drawer */}
    </header>
  )
}

export default Header
 