import axios from "axios";

const URL = "https://memories-creator-app.herokuapp.com/posts";


//get all posts
export const fetchPosts = () => axios.get(URL);

//create new posts
export const createPosts = (newPost) => axios.post(URL, newPost);

//update post
export const updatePost = (id, updatedPost) =>
  axios.patch(`${URL}/${id}`, updatedPost);

//delete post

export const deletePost = (id) => axios.delete(`${URL}/${id}`);

//like post
export const likePost = (id) => axios.patch(`${URL}/${id}/likepost`);

//manual login / logout
// export const signIn = (formData) => axios.post("/user/signin", formData);
// export const signUp = (formData) => axios.post("/user/signup", formData);
