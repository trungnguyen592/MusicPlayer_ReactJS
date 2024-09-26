import React, { useEffect, useState } from "react";
import "../sidebar/sidebar.css";
import SidebarButton from "./sidebarButton";
import { FaGripfire, FaPlay, FaSignOutAlt } from "react-icons/fa";
import { MdSpaceDashboard, MdFavorite } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://i.pinimg.com/736x/b5/3c/8b/b53c8b947486580b32437faf19b00146.jpg"
  );
  useEffect(() => {
    apiClient
      .get("me")
      .then((response) => {
        if (response.data.images && response.data.images.length > 0) {
          setImage(response.data.images[0].url);
        }
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
      });
  }, []);

  return (
    <div className="sidebar-container">
      <img src={image} className="pro5-img" alt="pro5" />
      <div>
        <SidebarButton
          title="Feed"
          to="/feed"
          icon={<MdSpaceDashboard></MdSpaceDashboard>}
        />
        <SidebarButton
          title="Trending"
          to="/trend"
          icon={<FaGripfire></FaGripfire>}
        />
        <SidebarButton title="Player" to="/player" icon={<FaPlay></FaPlay>} />
        <SidebarButton
          title="Favourites"
          to="/tym"
          icon={<MdFavorite></MdFavorite>}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary></IoLibrary>} />
      </div>
      <SidebarButton
        title="Sign Out"
        to=""
        icon={<FaSignOutAlt></FaSignOutAlt>}
      />
    </div>
  );
}
