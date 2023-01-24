import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    </>
  );
}

export default App;
