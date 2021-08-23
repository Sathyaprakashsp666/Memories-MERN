import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@material-ui/core";

const Posts = ({ setCurrentId, currentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  // console.log(posts);

  return !posts.length ? (
    <div className={classes.loading}>
      <CircularProgress color="secondary" varian="determinate" />

      <Typography variant="h6">Please wait ....</Typography>
    </div>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} currentId={currentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
