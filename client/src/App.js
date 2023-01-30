import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Signup";


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="*" element={<Error/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>
  );
}

export default App;
