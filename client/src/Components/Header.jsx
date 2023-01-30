import React from 'react'
import Avatar from '@mui/material/Avatar';

const Header = () => {


    return (
        <>
            <div style={{display:"flex", w:"70%", margin:"auto",backgroundColor:"pink",justifyContent:"space-around",alignItems:"center"}}>
                <h1>Navbar</h1>
                <Avatar style={{backgroundColor:"black"}}></Avatar>
            </div>
        </>
    )
}

export default Header