import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createPosts, updatePost } from "../../Redux/actions/posts";

const user = JSON.parse(localStorage.getItem("profile"));
const creator = user?.result.name;

const init = {
  creator: creator,
  title: "",
  message: "",
  tags: "",
  selectedFile: "",
};

const Form = ({ setCurrentId, currentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState(init);

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  //clearing input fields
  const clear = () => {
    setCurrentId(null);
    setPostData(init);
  };

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  //form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPosts(postData));
    }
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        //noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          required
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Add your Message here !!"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          required
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Enter Tags (coma separated)"
          fullWidth
          required
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
          required
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
            required
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
