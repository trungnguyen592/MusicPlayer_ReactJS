import React from "react";
import "../sidebar/sidebarButton.css";
import { IconContext } from "react-icons/lib";
import { useLocation, Link } from "react-router-dom";

export default function SidebarButton(props) {
  const location = useLocation();
  const isActive = location.pathname === props.to;
  const btnClass = isActive ? "btn-body active" : "btn-body";
  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {props.icon}
          <p className="btn-title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
}
