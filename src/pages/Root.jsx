import React from "react";
import "./Root.scss";
import Auth from "./Auth";
import { Outlet, NavLink } from "react-router-dom";

const Root = () => {
  const userId = false
  return (
    <div>
      {userId ? (
      <nav className="nav-bar">
      <NavLink><h3>Home</h3></NavLink>
      <NavLink><h3>Dash Board</h3></NavLink>
      <NavLink><h3>Add Meal</h3></NavLink>
      <NavLink><h3>Diet Program</h3></NavLink>
      <NavLink><h3>Add Exercise</h3></NavLink>
      <NavLink><h3>Training Program</h3></NavLink>
    </nav>
      ) : (
        <Auth />
      )}
      <Outlet/>
    </div>
  );
};

export default Root;
