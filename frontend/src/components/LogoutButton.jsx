import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Logout.css"

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
