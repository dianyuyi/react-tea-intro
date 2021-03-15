import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import useStyles from "../styles/header";

const Header = () => {
  const classes = useStyles();
  // const location = useLocation();

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <Link className={classes.appbarTitle} to="/">
            <h1>林芳茶園</h1>
          </Link>
          <IconButton component={Link} to="/about">
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
