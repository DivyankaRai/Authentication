import React,{createContext,useState} from 'react'
export const LoginContext = createContext([])

const Context = ({children}) => {
    const [loginData, setloginData] = useState([])
  return (
    <>
    <LoginContext.Provider value={{loginData,setloginData}}>
      {children}
    </LoginContext.Provider>
    </>
  )
}

export default Context
