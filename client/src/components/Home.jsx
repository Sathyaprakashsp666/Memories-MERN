import React from "react";
import { AppBar, Container, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import useStyles from "./style";

const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="false">
      <AppBar position="static" color="inhiret" className={classes.appBar}>
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
          justify="space-between"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default Home;
