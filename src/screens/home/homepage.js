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
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
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
