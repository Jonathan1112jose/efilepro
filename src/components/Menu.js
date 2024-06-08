import React from "react";
import { useAuth } from "../auth/AuthProvider";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import NavButton from "./NavButton";
import "./style.css";

const Menu = () => {
  const auth = useAuth();

  return (
    <div className="nav-bar">
      <NavButton icon={<HomeIcon />} label="HOME" />
      <NavButton icon={<PersonIcon />} label="PROFILE" selected />
      <NavButton icon={<ChatBubbleIcon />} label="CHAT" />
      <NavButton icon={<HelpIcon />} label="HELP" />
      {auth.user.role === "admin" && (
        <NavButton icon={<SettingsIcon />} label="SETTINGS" />
      )}
    </div>
  );
};

export default Menu;
