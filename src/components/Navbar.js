import React from 'react'

const Navbar = () => {
  const navbarItems = ['Home', 'Sign Up', 'Login', 'About']
  return (
    <div className='navbar-container'>
      {navbarItems.map(item => <div key={item} className='navbar-item'>{item}</div>)}
    </div>
  )
}

export default Navbar
