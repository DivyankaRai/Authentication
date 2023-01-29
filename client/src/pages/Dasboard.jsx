import React,{ useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const Dasboard = () => {

  const nav = useNavigate()

  const [loginData, setloginData] = useState("")

    const chkValidation = async() =>{
        let token = localStorage.getItem("userdata")
        // console.log(token)
        const res = await fetch("http://localhost:8080/validuser",{
            method:"GET",
            headers:{
                "Content-Type":"appliation/json",
                "Authorization":token
            }
        })

        const data = await res.json()
        setloginData(data.validUser)
        if(data.status == 401 || !data){
          console.log("error page redirect");
          nav("*")
        }
        else{
          console.log("user verify");
        }
    }

    // console.log(loginData.name);

    useEffect(() => {
        chkValidation()
    }, [])

  return (
    <>
    <Header loginData={loginData} />
     <div style={{margin: "auto",width:"30%", marginTop: "5%",display:"flex" ,alignItems:"center",justifyContent:"center" }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU" alt="" />
        <h1>{loginData.email}</h1>
      </div>
    </>
  )
}

export default Dasboard
