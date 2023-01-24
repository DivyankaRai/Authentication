import React from 'react'
import Avatar from "@mui/material/Avatar"

const Header = () => {
  return (
    <div>
      <header style={{display:"flex",justifyContent:"space-around",border:"2px solid black",backgroundColor:"pink"}}>
        <nav><h1>Navbar</h1></nav>
        <div style={{marginTop:"10px"}}>
        <Avatar style={{backgroundColor:"black"}}>D</Avatar>
        </div>
      </header>
    </div>
  )
}

export default Header
