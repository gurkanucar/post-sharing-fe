import React, { useEffect, useState } from "react";
import { createPost, getAllPosts } from "../../api/apiCalls";
import CreatePostComponent from "../../components/CreatePostComponent/CreatePostComponent";
import PostListComponent from "../../components/PostListComponent/PostListComponent";
import { useSelector } from "react-redux";
import "./HomePage.css";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const user = useSelector((state) => state.auth.value.user);

  useEffect(() => {
    loadAllPosts();
  }, []);

  const createPostFunction = async () => {
    if (content != "") {
      await createPost({
        user,
        content,
      });
      setContent("");
      loadAllPosts();
    } else {
      alert("Error!");
    }
  };

  const loadAllPosts = async () => {
    try {
      const response = await getAllPosts();
      setPosts(response.data);
    } catch (error) {}
  };

  return (
    <div className="homePage">
      <CreatePostComponent
        createPostFunction={createPostFunction}
        content={content}
        setContent={setContent}
      />
      <PostListComponent posts={posts} activeUser={user} />
    </div>
  );
};

export default HomePage;
