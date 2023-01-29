import React from 'react'
import Avatar from "@mui/material/Avatar"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const Header = ({loginData}) => {

  const nav =  useNavigate()

  // console.log(loginData)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const goError = () =>{
    nav("*")
  }

  const goDash = () =>{
    nav("/dashboard")
  }

  const logout = async() =>{
    let token = localStorage.getItem("userdata")
    // console.log(token)
    const res = await fetch("http://localhost:8080/logout",{
        method:"GET",
        headers:{
            "Content-Type":"appliation/json",
            "Authorization":token,
            "Accept": "appliation/json"
        },
        credentials:"include"
    })

    const data = await res.json()

    if(data.status != 201 ){
      console.log("error pagelogout");
      nav("*")
    }
    else{
      // console.log("/");
      localStorage.removeItem("userdata")
      console.log(data,"logoout")
      nav("/")
    }
  }
  
  return (
    <div>
      <header style={{display:"flex",justifyContent:"space-around",border:"2px solid black",backgroundColor:"pink"}}>
        <nav><h1>Navbar</h1></nav>
        <div style={{marginTop:"10px"}}>
        </div>
        <Avatar style={{backgroundColor:"black",marginTop:"1%"}} onClick={handleClick}></Avatar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          loginData ?  
          <>
            <MenuItem onClick={()=>{ goDash()
                                     handleClose()}} >Profile</MenuItem>
            <MenuItem onClick={()=>{ logout() 
                                    handleClose()}}>Logout</MenuItem>
          </>
          : <MenuItem onClick={()=>{ goError() 
                                     handleClose()}}>Profile</MenuItem>
        }
      </Menu>
      </header>
    </div>
  )
}

export default Header
