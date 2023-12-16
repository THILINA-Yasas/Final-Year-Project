import React from "react";
import { Link } from "react-router-dom";

function Sidebarrow({ name, icon, url }) {
  return (
    <Link to={url} style={{ textDecoration: "none" }} className="sidebarrow">
      <span className="sidebarrowtxt">{name}</span>
      <span className="sidebarrowicon">{icon}</span>
    </Link>
  );
}

export default Sidebarrow;
