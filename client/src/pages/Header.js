import React, { useContext } from 'react'
import Avatar from "@mui/material/Avatar"
import { DashData } from '../Context/Context'

const Header = () => {

  const {logindata,setlogindata} = useContext(DashData)
  // console.log(logindata.name[0])
  
  return (
    <div>
      <header style={{display:"flex",justifyContent:"space-around",border:"2px solid black",backgroundColor:"pink"}}>
        <nav><h1>Navbar</h1></nav>
        <div style={{marginTop:"10px"}}>
        <Avatar style={{backgroundColor:"black"}}>{logindata.validUser.name[0].toUpperCase()}</Avatar>
        </div>
      </header>
    </div>
  )
}

export default Header
