import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "../library/library";
import Feed from "../feed/feed";
import Trend from "../trending/trend";
import Player from "../player/player";
import Favourites from "../favourites/tym";
import "../home/home.css";
import Sidebar from "../../components/sidebar";
export default function Homepage() {
  return (
    <BrowserRouter>
      <div className="main-body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending" element={<Trend />} />
          <Route path="/player" element={<Player />} />
          <Route path="/tym" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
