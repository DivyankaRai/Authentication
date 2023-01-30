import React,{useState} from 'react'

const Signup = () => {

   const [inputdata, setinputdata] = useState({
    email:"",
    password:""
   })

   const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setinputdata({...inputdata,[name]:value})
   }

   const handleSubmit = async(e) => {
    e.preventDefault()
    // console.log(inputdata);
    const { name, email, password, cpassword} = inputdata
    if(password!=cpassword){
      alert("password doesnt match")
    }
    // const data = await fetch("/register",{
    //   method: "POST",
    //   heders: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //       name, email, password, cpassword
    //   })
    // })
   }

  return (
    <div style={{marginTop:"5%"}}>
      <form>
        <input type="email" placeholder='email' name="email" onChange={handleChange} />
        <input type="text" placeholder='paasword' name='password' onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Signup
