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

  const addUserData = () =>{
   
  }

  return (
    <div
      style={{
        width: "300px",
        height: "280px",
        border: "2px solid black",
        margin: "auto",
        textAlign: "center",
        marginTop: "5%",
        backgroundColor: "pink",
      }}
    >
      <form>
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
            placeholder="enter your email"
             value={inpVal.email}
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
        <br />
        <button onClick={addUserData}>Login</button>
        <p>
          Don't have an account? <NavLink to="/register">Sign-Up</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
