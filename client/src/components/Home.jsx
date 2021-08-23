import React, { useEffect, useState } from "react";
import { Grow, Grid, Paper, Typography } from "@material-ui/core";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import useStyles from "./style.js";
import { useDispatch } from "react-redux";
import { getPosts } from "../Redux/actions/posts";
import { Link, useHistory, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();

  const dispatch = useDispatch();

  // const isLogin = useSelector((state) => state.auth.isLogin);
  //console.log(isLogin);
  const initUser = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState(initUser);
  const isLogin = user?.token;
  //console.log(isLogin)

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId, isLogin]);
  return (
    <>
      <Grow in>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2}
          className={classes.mainContainer}
        >
          {isLogin ? (
            <Grid item xs={12} sm={4}>
              <Form setCurrentId={setCurrentId} currentId={currentId} />
            </Grid>
          ) : (
            <Grid item xs={12} sm={4}>
              <Paper>
                <Typography variant="h6">
                  Please login to create your own memories like others's
                </Typography>
              </Paper>
            </Grid>
          )}
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} currentId={currentId} />
          </Grid>
        </Grid>
      </Grow>
    </>
  );
};

export default Home;
