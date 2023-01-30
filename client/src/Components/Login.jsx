import React,{useState} from 'react'

const Login = () => {

   const [inputdata, setinputdata] = useState({
    name:"",
    email:"",
    password:"",
    cpassword:""
   })

   const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setinputdata({...inputdata,[name]:value})
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputdata);
   }

  return (
    <>
      <div style={{marginTop:"5%"}}>
      <form>
        <input type="text" placeholder='name' name="name" onChange={handleChange} />
        <input type="email" placeholder='email' name="email" onChange={handleChange} />
        <input type="text" placeholder='paasword' name='password' onChange={handleChange} />
        <input type="text" placeholder='cpassword' name='cpassword' onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div> 
    </>
  )
}

export default Login
