import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import Login from "./Components/Login";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
