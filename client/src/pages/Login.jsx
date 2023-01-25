import React, { useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";

const Login = () => {

  const nav = useNavigate()
  const [passShow, setpassShow] = useState(false);

   const [inpVal, setinpVal] = useState({
      email: "",
      password: ""
   })

  const setVal = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setinpVal({ ...inpVal, [name]: value });
  };

  console.log(inpVal);

  const addUserData = async(e) =>{
    e.preventDefault()
    const {email,password} = inpVal 
    try {
      const data = await fetch("http://localhost:8080/login",{
        method:"POST",
        headers : { 
          'Content-Type': 'application/json'
         },
        body:JSON.stringify({
          email,password
        })
      })
      const res = await data.json()
      console.log(res,"res");
      // if(res.status == 200){
      //   (alert("registered successfully"))
      //   nav("/")
      // }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      style={{
        width: "370px",
        height: "390px",
        border: "2px solid black",
        margin: "auto",
        textAlign: "center",
        marginTop: "5%",
        backgroundColor: "pink",
      }}
    >
      <form>
        <h1>Enter your Email</h1>
        <div
          style={{
            backgroundColor: "white",
            height: "40px",
            width: "80%",
            margin: "auto",
          }}
        >
          <input
            style={{
              border: "none",
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
            type="email"
            name="email"
            placeholder="enter your email"
             value={inpVal.email}
            onChange={setVal}
          />
        </div>
        <h1>Enter your password</h1>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            height: "40px",
            width: "80%",
            margin: "auto",
          }}
        >
          <input
            style={{ border: "none", marginLeft: "3%" }}
            type={!passShow ? "password" : "text"}
            name="password"
            placeholder="enter your password"
             value={inpVal.password}
            onChange={setVal}
          />
          <div
            style={{ marginLeft: "5%", marginTop: "2%", cursor: "pointer" }}
            onClick={() => {
              setpassShow(!passShow);
            }}
          >
            {!passShow ? "Show" : "Hide"}
          </div>
        </div>
        <br />
        <button onClick={addUserData}>Login</button>
        <h4>
          Don't have an account? <NavLink to="/register">Sign-Up</NavLink>
        </h4>
      </form>
    </div>
  );
};

export default Login;
