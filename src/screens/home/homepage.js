import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "../library/library";
import Feed from "../feed/feed";
import Trend from "../trending/trend";
import Player from "../player/player";
import Favourites from "../favourites/tym";
import "../home/home.css";
import Sidebar from "../../components/sidebar";
import Login from "../auth/login";
import { setClientToken } from "../../spotify";

export default function Homepage() {
  const [token, setToken] = useState("");

  useEffect(() => {
    // Lấy token từ localStorage (nếu có)
    const storedToken = window.localStorage.getItem("token");

    // Lấy hash từ URL sau khi đăng nhập qua Spotify
    const hash = window.location.hash;
    window.location.hash = ""; // Xóa hash khỏi URL để gọn gàng

    // Nếu chưa có token trong localStorage và có token trong hash
    if (!storedToken && hash) {
      const _token = new URLSearchParams(hash.substring(1)).get("access_token");
      if (_token) {
        window.localStorage.setItem("token", _token); // Lưu token vào localStorage
        setToken(_token); // Lưu token vào state
        setClientToken(_token); // Thiết lập token cho các yêu cầu API
      }
    } else if (storedToken) {
      // Nếu token đã có trong localStorage, sử dụng nó
      setToken(storedToken);
      setClientToken(storedToken);
    }
  }, []);

  return !token ? (
    <Login /> // Nếu chưa có token, hiển thị trang đăng nhập
  ) : (
    <BrowserRouter>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="/player" element={<Player />} />
          <Route path="/tym" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
