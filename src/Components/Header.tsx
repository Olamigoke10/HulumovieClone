import React from 'react'
import Logo from "../assets/Images/logo.png"

const Header = () => {
    const menu = [
        {
            id:1,
            name:"Home"
        },
        {
            id:2,
            name:"Movies"
        },
        {
            id:3,
            name:"TV"
        },
        {
            id:4,
            name:"Sports"
        },
        {
            id:5,
            name:"MyStuff"
        },
        {
            id:6,
            name:"Hub"
        },

    ]
  return (
    <div>
      <img src={Logo } alt=""/>
    </div>
  )
}

export default Header
