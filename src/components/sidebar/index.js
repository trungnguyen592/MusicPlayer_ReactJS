import React from "react";
import "../sidebar/sidebar.css";
import SidebarButton from "./sidebarButton";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src="https://i.pinimg.com/736x/b5/3c/8b/b53c8b947486580b32437faf19b00146.jpg"
        className="pro5-img"
        alt="pro5"
      />
      <div>
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
        <SidebarButton />
      </div>
      <SidebarButton />
    </div>
  );
}
