import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const Signup: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const navigate = useNavigate() ;
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_AUTH_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      
      
      if(response.status == 201){
        navigate('/login') ;
      }else{
        setError("Failed to sign up. Please try again.");
      }
    } catch (error) {
      console.error("Signup Error", error);
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded" 
          />
        </div>
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
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Sign Up
        </button>
        <p className="text-sm mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
