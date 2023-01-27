import React,{useEffect} from 'react'

const Dasboard = () => {

    const chkValidation = async() =>{
        let token = localStorage.getItem("userdata")
        // console.log(token)
        const res = await fetch("/validUser",{
            method:"GET",
            headers:{
                "Content-Type":"appliation/json",
                "Authorization":token
            }
        })

        const data = await res.json()
        console.log(data);
    }

    useEffect(() => {
        chkValidation()
    }, [])

  return (
    <div style={{margin: "auto",width:"30%", marginTop: "5%",display:"flex" ,alignItems:"center",justifyContent:"center" }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeeUl9IZDN97pBQNgeunx6dD1df-4g7vkPFw&usqp=CAU" alt="" />
        <h1>divyanka@gmail.com</h1>
    </div>
  )
}

export default Dasboard
