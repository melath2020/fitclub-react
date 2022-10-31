import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
function Header() {
  const mobile =window.innerWidth<=768 ? true : false;
  const [menuOpened,SetMenuOpened] =useState(false)
  return (
    <div className="header" id='header'>
        <img src={Logo} className="logo" alt="" />
      {(menuOpened===false && mobile===true)?(
      <div style={{
        backgroundColor:"var(--appColor)",
        padding:'0.5rem',
        borderRadius:'5px'
      }}
      onClick={
        ()=>SetMenuOpened(true)
      }><img src={Bars} style={{width:'1.5rem', height:'1.5rem'}} alt="" /></div>
      ):  <ul className='header-menu'>
      <li >
          <Link onClick={
          ()=>SetMenuOpened(false)}
          activeClass="active"
           to='header'
          span={true} smooth={true}>Home</Link></li>
      <li  ><Link onClick={
          ()=>SetMenuOpened(false)} to='programs'
          span={true} smooth={true}>Programs</Link></li>
      <li  ><Link onClick={
          ()=>SetMenuOpened(false)} to='reasons'
          span={true} smooth={true}>Why us</Link></li>
      <li ><Link onClick={
          ()=>SetMenuOpened(false)} to='plans'
          span={true} smooth={true}>Plans</Link></li>
      <li  > <Link onClick={
        ()=>SetMenuOpened(false)} to='testimonials'
        span={true} smooth={true}>Testimonials</Link></li>
  </ul>}
       
    </div>
  )
}

export default Header