import React from "react";
import Home from "./Home";
import Categories from "./Categories";
import Shop from "./Shop";
import Activity from "./Activity";

function Container({ page }) {
  if (page === "home") {
    return (
      <div className="container">
        <Home />
      </div>
    );
  } else if (page === "categories") {
    return (
      <div className="container">
        <Categories />
      </div>
    );
  } else if (page === "shop") {
    return (
      <div className="container">
        <Shop />
      </div>
    );
  } else if (page === "activity") {
    return (
      <div className="container">
        <Activity />
      </div>
    );
  }
}

export default Container;
