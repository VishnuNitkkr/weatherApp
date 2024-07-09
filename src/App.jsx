import { Route, Routes } from "react-router-dom";
import "./App.css";

import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/navbar/Navbar";

import Login from "./components/user/Login.jsx";
import Register from "./components/user/Register.jsx";
import ProtectedRoute from "./components/user/ProtectedRoute.jsx";
import WeatherData from "./components/user/WeatherData.jsx";
import PublicRoute from "./components/user/PublicRoute.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              
            </ProtectedRoute>
          }
        >
          <Route path="" element=
           {<WeatherData />} 
          />
        </Route>

<Route
          path="/"
          element={
            <PublicRoute/>
  
          }
        >
          <Route path="Login" element={<Login />}/>
        </Route>
        <Route
          path="/"
          element={
            <PublicRoute/>
  
          }
        >
          <Route path="register" element={<Register />}/>
        </Route>
      </Routes>
      <ToastContainer position="top-center"/>
    </>
  );
}

export default App;
