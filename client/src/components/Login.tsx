import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const apiurl = import.meta.env.VITE_AUTH_URL

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch(`${apiurl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      
      const result = await response.json();
      // console.log("Login Response", result);
      if(response.status == 200){
        localStorage.setItem("token", result.token);
        localStorage.setItem("isLoggedIn", "true" );
        navigate('/');
      }else{
        setError("Failed to log in. Please try again.");
      }
    } catch (error) {
      console.error("Login Error", error);
      setError("Failed to log in. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded" 
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded" 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p className="text-sm mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </form>
    </div>
  );
};
