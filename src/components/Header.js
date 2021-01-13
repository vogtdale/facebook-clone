import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FlagIcon from "@material-ui/icons/Flag";
import ForumIcon from "@material-ui/icons/Forum";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsActiveIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SubscriptionsOptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import React from "react";

import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"
          alt="facebook logo"
        />
      </div>
      <div className="header__input">
        <SearchIcon />
        <input placeholder="Search Facebook" type="text" />
      </div>
      <div className="header__center">

        <div className="header__options header__options--active">
          <HomeIcon fontsize="large" />
        </div>
        <div className="header__options">
          <FlagIcon fontsize="large" />
        </div>
        <div className="header__options">
          <SubscriptionsOptionsOutlinedIcon fontsize="large" />
        </div>
        <div className="header__options">
          <StorefrontOutlinedIcon fontsize="large" />
        </div>
        <div className="header__options">
          <SupervisedUserCircleIcon fontsize="large" />
        </div>
        <div className="header__right">
          <div className="header__info">
            <Avatar />
            <h4>dalo</h4>
          </div>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        
        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
