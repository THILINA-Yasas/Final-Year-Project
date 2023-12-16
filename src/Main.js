import React from "react";
import Topbar from "./Topbar";
import Container from "./Container";

function Main({ page }) {
  return (
    <div className="main">
      <Topbar />
      <Container page={page} />
    </div>
  );
}

export default Main;
