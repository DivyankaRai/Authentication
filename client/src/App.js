import { Route, Routes } from "react-router-dom";
import Dasboard from "./pages/Dasboard";
import Header from "./pages/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path='/dashboard' element={<Dasboard/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </>
  );
}

export default App;
