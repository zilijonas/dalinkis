import React from "react";
import { Menu, MenuItem } from "@material-ui/core";

interface Props {
  id: string;
  anchorElement: HTMLElement | null;
  onMenuClosed(): void;
}

export const NavBarMenu: React.FC<Props> = ({ id, anchorElement, onMenuClosed }) => {
  const isMenuOpen = Boolean(anchorElement);

  return (
    <Menu
      id={id}
      anchorEl={anchorElement}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={onMenuClosed}
    >
      <MenuItem onClick={onMenuClosed}>Profile</MenuItem>
      <MenuItem onClick={onMenuClosed}>My account</MenuItem>
    </Menu>
  );
};
