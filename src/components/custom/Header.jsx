import React from "react";

function Header() {
  return (
    <div
      className="p-3 shadow-sm"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
      }}
    >
      <img
        src="/logo.png"
        style={{ height: "80px", width: "110px" }}
        alt="logo"
      />

      <button>Sign In</button>
    </div>
  );
}

export default Header;
