import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/logout", { method: "POST"});
      localStorage.removeItem("isLoggedIn");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="flex justify-end p-4">
    <button 
      onClick={handleLogout} 
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  </div>
  );
};

export default LogoutButton;