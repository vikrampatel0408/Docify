import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { TextEditor } from "./components/TextEditor"
import { LandingPage } from "./components/LandingPage"
import { Login } from "./components/Login" 
import { Navigate } from "react-router-dom"
import Signup from "./components/Signup"
// import { v4 as uuidV4 } from "uuid"

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/"  element={isLoggedIn == "true" ? <LandingPage /> : <Navigate to="/login"/>} />
          <Route path="/documents/:id"element={isLoggedIn == "true" ? <TextEditor /> : <Navigate to="/login"/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
