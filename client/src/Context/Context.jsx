import React,{createContext,useState} from 'react'
export const DashData = createContext("")

const Context = ({children}) => {
    const [logindata, setlogindata] = useState("")
  return (
    <>
    <DashData.Provider value={{logindata,setlogindata}}>
      {children}
    </DashData.Provider>
    </>
  )
}

export default Context
