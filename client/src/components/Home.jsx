import React, { useEffect, useState } from "react";
import { AppBar, Container, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { getPosts } from "../Redux/actions/posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h2" align="center" className={classes.heading}>
          MEMORIES
        </Typography>
        <img
          className={classes.image}
          height="60px"
          src="https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/PART_1_and_2/client/src/images/memories.png"
          alt="image"
        />
      </AppBar>
      <Grow in>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId= {setCurrentId} currentId= {currentId}/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form setCurrentId= {setCurrentId} currentId= {currentId}/>
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default Home;
