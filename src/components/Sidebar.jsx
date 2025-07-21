// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "bg-blue-600 text-white px-4 py-2 rounded"
      : "text-blue-600 px-4 py-2";

  return (
    <div className="flex flex-col gap-3 p-4 bg-gray-100 min-h-screen">
      <NavLink to="/dashboard" className={linkStyle}>
        Dashboard
      </NavLink>
      <NavLink to="/css-guide" className={linkStyle}>
        Css Guide
      </NavLink>
      <NavLink to="/projects/es6" className={linkStyle}>
        Es6 JS
      </NavLink>
      <NavLink to="/responsive" className={linkStyle}>
      Responsive
      </NavLink>
      
      <NavLink to="/LogicQues" className={linkStyle}>
      LogicQues
      </NavLink>
      
      <NavLink to="/skills" className={linkStyle}>
        Skills
      </NavLink>
      
      <NavLink to="/flashcards" className={linkStyle}>
        Flashcards
      </NavLink>
      <NavLink to="/notes" className={linkStyle}>
        Notes
      </NavLink>
      <NavLink to="/react" className={linkStyle}>
        React 100
      </NavLink>
      <NavLink to="/interview" className={linkStyle}>
        Interview Qs
      </NavLink>
    </div>
  );
};

export default Sidebar;
