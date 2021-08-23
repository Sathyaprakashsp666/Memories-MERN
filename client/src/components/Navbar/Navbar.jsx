import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from "./styles.js";
import { Link, useHistory, useLocation } from "react-router-dom";
import { LOGOUT } from "../../Redux/actionTypes/actionTypes";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useStyles();

  //fetching user login details from localstorage
  const initUser = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState(initUser);

  console.log(user);
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    setUser(initUser);
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/auth");
    setUser(null);
  };

  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Typography
          variant="h3"
          align="center"
          className={classes.heading}
          component={Link}
          to="/"
        >
          MEMORIES
        </Typography>
        <img
          className={classes.image}
          height="50px"
          width="100%"
          src="https://cdn2.iconfinder.com/data/icons/multimedia-4-4/48/174-128.png"
          alt="image"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {/* // use  exist ? :  */}
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)} // Only taking first charatcer of
              the name
            </Avatar>
            {/* <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography> */}
            <Button
              variant="contained"
              className={classes.logout}
              color="primary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            className={classes.logout}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
