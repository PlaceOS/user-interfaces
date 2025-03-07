import React from "react";
import "./App.css";
import qrCode from "./assets/qr_code.png";
import logo from "./assets/KJTech.png";

function QRPage({ onLogin }) {
  return (
    <div className="App">
      <div className="top-right-logo">
        <img src={logo} alt="KJTech PlaceOS" />
      </div>

      <div className="qr-container">
        <img src={qrCode} alt="QR Code" className="qr-image" />
      </div>

      <div className="bottom-line"></div>

      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default QRPage;
