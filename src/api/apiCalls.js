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
  return axios.delete(BASE_URL + "/post/like", { data: likeRequest });
};

export const getComments = (postID) => {
  return axios.get(BASE_URL + "/post/comment/" + postID);
};

export const addComment = (commentRequest) => {
  return axios.post(BASE_URL + "/post/comment", commentRequest);
};

export const removeComment = (commentRequest) => {
  console.log(commentRequest);
  return axios.delete(BASE_URL + "/post/comment", { data: commentRequest });
};

export const getAllNotifs = (userID) => {
  return axios.get(BASE_URL + "/notification/" + userID);
};

export const changeNotifStatusToRead = (notifID) => {
  return axios.patch(BASE_URL + "/notification/read/" + notifID);
};
