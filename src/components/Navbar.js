import React from 'react'
import { NavLink } from 'react-router-dom'

const navbarItems = [
  {
    name: 'Home',
    route: '/'
  },
  {
   name: 'Data',
   route: '/data'
  },
  // {
  //  name: 'Sign Up',
  //  route: '/signup'
  // },
  // {
  //   name: 'Login',
  //   route: '/login'
  // },
  {
    name: 'About',
    route: '/about'
  }
]

const Navbar = () => {
  return (
    <div className='navbar-container'>
      {navbarItems.map(item => <NavLink to={item.route} key={item.name} className='navbar-item'>{item.name}</NavLink>)}
    </div>
  )
}

export default Navbar
