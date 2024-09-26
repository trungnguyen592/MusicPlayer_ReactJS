import React from "react";
import { loginEndpoint } from "../../spotify";
import "./login.css";

const Login = () => {
  const handleLogin = () => {
    window.location.href = loginEndpoint; // Chuyển hướng người dùng đến trang đăng nhập Spotify
  };

  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo"
      />
      <h1 className="login-heading">Đăng nhập vào Spotify</h1>
      <button className="login-btn" onClick={handleLogin}>
        Đăng nhập Spotify
      </button>
    </div>
  );
};

export default Login;
