import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { logoff } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function Topbar() {

  const dispatch = useDispatch();

  const signout = (e) => {
    e.preventDefault();
    logoff(dispatch);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">yang Admin portal</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
          <div className="topbarIconContainer">
            <button onClick={signout}>signout</button>
          </div>
        
        </div>
      </div>
    </div>
  );
}
