import React from "react";
import Sidebarrow from "./Sidebarrow";
import HomeIcon from "@mui/icons-material/Home";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar1">
        <div className="sidebar11">UiMaster</div>
        <div className="sidebar12">
          <Sidebarrow
            name="Home"
            url="home"
            icon={<HomeIcon fontSize="inherit" />}
          />
          <Sidebarrow
            name="Categories"
            url="categories"
            icon={<DashboardRoundedIcon fontSize="inherit" />}
          />
          <Sidebarrow
            name="Shop"
            url="shop"
            icon={<ShoppingCartRoundedIcon fontSize="inherit" />}
          />
          <Sidebarrow
            name="My Activity"
            url="activity"
            icon={<HistoryOutlinedIcon fontSize="inherit" />}
          />
        </div>
        <div className="sidebar13">
          <Sidebarrow
            name="Give Ratings"
            url="giveratings"
            icon={<StarOutlinedIcon fontSize="inherit" />}
          />
          <Sidebarrow
            name="Ratings"
            url="ratings"
            icon={<StarOutlinedIcon fontSize="inherit" />}
          />
          <Sidebarrow
            name="Buy a coffee"
            url="buyacoffee"
            icon={<StarOutlinedIcon fontSize="inherit" />}
          />
        </div>
        <div className="sidebar14">
          <Sidebarrow
            name="Settings"
            url="settings"
            icon={<SettingsIcon fontSize="inherit" />}
          />
          <Sidebarrow
            name="About"
            url="about"
            icon={<InfoRoundedIcon fontSize="inherit" />}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
