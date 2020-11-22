import React from "react";
import { AppBar, Badge, createStyles, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HelpIcon from "@material-ui/icons/Help";
import LoopIcon from "@material-ui/icons/Loop";
import { NavBarMenu } from "./NavBarMenu";
import { NavBarMobileMenu } from "./NavBarMobileMenu";
import { NavBarSearchInput } from "./NavBarSearchInput";
import { useRecoilState } from "recoil";
import { searchState } from "../../search/search-state";

export const NavBar: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const [, setSearch] = useRecoilState(searchState);

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <LoopIcon className={classes.logo} />
          <Typography className={classes.title} variant="h5" noWrap>
            Dalinkis
          </Typography>
          <NavBarSearchInput onSearchUpdated={setSearch} />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="help" color="inherit">
              <HelpIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <NavBarMobileMenu
        id={mobileMenuId}
        anchorElement={anchorEl}
        onMenuClosed={handleMenuClose}
        onProfileClicked={handleProfileMenuOpen}
      />
      <NavBarMenu id={menuId} anchorElement={mobileMoreAnchorEl} onMenuClosed={handleMenuClose} />
    </div>
  );

  function handleProfileMenuOpen(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event: React.MouseEvent<HTMLElement>) {
    setMobileMoreAnchorEl(event.currentTarget);
  }
};

const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    title: {
      flexGrow: 1,
      display: "none",
      marginLeft: theme.spacing(1),
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);
