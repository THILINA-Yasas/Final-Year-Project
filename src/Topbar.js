import React from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar">
      <Link to="/home" className="topbartxt" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link
        to="/categories"
        className="topbartxt"
        style={{ textDecoration: "none" }}
      >
        Categories
      </Link>
      <Link to="/shop" className="topbartxt" style={{ textDecoration: "none" }}>
        Shop
      </Link>
      <Link
        to="/activity"
        className="topbartxt"
        style={{ textDecoration: "none" }}
      >
        Activity
      </Link>

      <div className="searchhere">
        <div className="searchheretxt">Search here</div>
        <AccountCircleRoundedIcon fontSize="inherit" />
      </div>
    </div>
  );
}

export default Topbar;
