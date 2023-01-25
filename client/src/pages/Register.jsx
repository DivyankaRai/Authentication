import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {

  const nav = useNavigate()
  const [passShow, setpassShow] = useState(false);
  const [cpassShow, setcpassShow] = useState(false);

  const [inpVal, setinpVal] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    
    const { name, value } = e.target;
    // console.log(name, value);
    setinpVal({ ...inpVal, [name]: value });
  };

  console.log(inpVal);

  const addUserData = async(e) =>{
    e.preventDefault()
    const {name,email,password,cpassword} = inpVal 
    if(password != cpassword){
      alert("password doesn't match")
    }
    try {
      const data = await fetch("http://localhost:8080/register",{
        method:"POST",
        headers : { 
          'Content-Type': 'application/json'
         },
        body:JSON.stringify({
          name,email,password,cpassword
        })
      })
      const res = await data.json()
      // console.log(res,"res");
      if(res.status == 200){
        (alert("registered successfully"))
        nav("/")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      style={{
        width: "300px",
        height: "auto",
        border: "2px solid black",
        margin: "auto",
        textAlign: "center",
        marginTop: "5%",
        backgroundColor: "pink",
      }}
    >
      <form>
        <h3>Enter yourName</h3>
        <div
          style={{
            backgroundColor: "white",
            height: "30px",
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
            type="text"
            name="name"
            value={inpVal.name}
            placeholder="enter your name"
            onChange={setVal}
          />
        </div>
        <h3>Enter your Email</h3>
        <div
          style={{
            backgroundColor: "white",
            height: "30px",
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
            value={inpVal.email}
            placeholder="enter your email"
            onChange={setVal}
          />
        </div>
        <h3>Enter your password</h3>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            height: "30px",
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
        <h3>Enter Confirm password</h3>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            height: "30px",
            width: "80%",
            margin: "auto",
          }}
        >
          <input
            style={{ border: "none", marginLeft: "3%" }}
            type={!cpassShow ? "password" : "text"}
            name="cpassword"
            placeholder="enter your Cpassword"
            onChange={setVal}
            value={inpVal.cpassword}
          />
          <div
            style={{ marginLeft: "5%", marginTop: "2%", cursor: "pointer" }}
            onClick={() => {
              setcpassShow(!cpassShow);
            }}
          >
            {!cpassShow ? "Show" : "Hide"}
          </div>
        </div>
        <br />
        <button style={{ marginBottom: "8%" }} onClick={addUserData}>Login</button>
        <p style={{ marginTop: "-2%" }}>
          Already have an account? <NavLink to="/">Login</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Register;
