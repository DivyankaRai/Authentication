import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  const [passShow, setpassShow] = useState(false)
  const [cpassShow, setcpassShow] = useState(false)

  const [inpVal, setinpVal] = useState({
    name:"",
    email:"",
    password:"",
    cpassword:""
  })

  const setVal=(e)=>{
    const {name,value} = e.target 
    console.log(name,value);
    setinpVal({...inpVal,[name]:value})
  }

  console.log(inpVal);

  return (
    <div style={{width:"300px",height:"auto", border: "2px solid black", margin:"auto",textAlign:"center",marginTop: "5%",backgroundColor:"pink"
    }}>
      <form>
      <h3>Enter yourName</h3>
        <div style={{backgroundColor:"white", height:"30px",width:"80%",margin:"auto"}}>
        <input style={{border:"none",height:"100%",width:"100%", textAlign:"center"}} type="text" name="name" placeholder='enter your name' onChange={setVal} />
        </div>
        <h3>Enter your Email</h3>
        <div style={{backgroundColor:"white", height:"30px",width:"80%",margin:"auto"}}>
        <input style={{border:"none", height:"100%",width:"100%", textAlign:"center"}} type="email" name="email" placeholder='enter your email' onChange={setVal} />
        </div>
          <h3>Enter your password</h3>
        <div style={{display:"flex",backgroundColor:"white",height:"30px",width:"80%",margin:"auto"}}>
          <input style={{border:"none",marginLeft: "3%"}} type={!passShow ? "password" : "text"} name="password" placeholder='enter your password' onChange={setVal} />
          <div style={{marginLeft:"5%",marginTop:"2%",cursor:"pointer"}} onClick={()=>{setpassShow(!passShow)}}>
            {!passShow ? "Show" : "Hide"}
          </div>
        </div>
        <h3>Enter Confirm password</h3>
        <div style={{display:"flex",backgroundColor:"white",height:"30px",width:"80%",margin:"auto"}}>
          <input style={{border:"none",marginLeft: "3%"}} type={!cpassShow ? "password" : "text"} name="cpassword" placeholder='enter your Cpassword' onChange={setVal} />
          <div style={{marginLeft:"5%",marginTop:"2%",cursor:"pointer"}} onClick={()=>{setcpassShow(!cpassShow)}}>
            {!cpassShow ? "Show" : "Hide"}
          </div>
        </div><br/>
        <button style={{marginBottom:"8%"}}>Login</button>
        <p style={{marginTop:"-2%"}}>Already have an account? <NavLink to="/">Login</NavLink></p>
      </form>
    </div>
  )
}

export default Register
