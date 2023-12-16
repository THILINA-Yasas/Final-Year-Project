import React from "react";
import Categorycard from "./Categorycard";

function Categories() {
  return (
    <div className="categories">
      <div className="categories0">Categories</div>
      <div className="categories1">
        <Categorycard aaa="Free Zone" />
        <Categorycard aaa="Paid Zone" />
        <Categorycard aaa="Top Up" />
      </div>
    </div>
  );
}

export default Categories;
