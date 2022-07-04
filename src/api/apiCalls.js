import axios from "axios";
import { BASE_URL } from "../constants";

export const getUserByUsername = (username) => {
  return axios.get(BASE_URL + "/user/" + username);
};

export const getAllPosts = () => {
  return axios.get(BASE_URL + "/post");
};

export const getPostById = (id) => {
  return axios.get(BASE_URL + "/post/" + id);
};

export const createPost = (post) => {
  return axios.post(BASE_URL + "/post", post);
};

export const addLike = (likeRequest) => {
  return axios.post(BASE_URL + "/post/like", likeRequest);
};

export const removeLike = (likeRequest) => {
  return axios.delete(BASE_URL + "/post/like", likeRequest);
};

export const addComment = (commentRequest) => {
  return axios.post(BASE_URL + "/post/comment", commentRequest);
};

export const removeComment = (commentRequest) => {
  return axios.delete(BASE_URL + "/post/comment", commentRequest);
};
