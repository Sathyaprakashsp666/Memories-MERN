import axios from "axios";

const URL = "http://localhost:5000/posts";

//get all posts
export const fetchPosts = () => axios.get(URL);


//create new posts
export const createPosts = (newPost) => axios.post(URL, newPost);

//update post
export const updatePost = (id, updatedPost)=> axios.patch(`${URL}/${id}`, updatedPost)

//delete post 

export const deletePost = (id)=> axios.delete(`${URL}/${id}`)

//like post
export const likePost = (id)=> axios.patch(`${URL}/${id}/likepost`)
