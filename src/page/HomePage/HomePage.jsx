import React, { useEffect, useState } from "react";
import { createPost, getAllPosts } from "../../api/apiCalls";
import CreatePostComponent from "../../components/CreatePostComponent/CreatePostComponent";
import PostListComponent from "../../components/PostListComponent/PostListComponent";
import { useSelector } from "react-redux";
import "./HomePage.css";
import { NavbarComponent } from "../../components/NavbarComponent/NavbarComponent";
import { FiRefreshCw } from "react-icons/fi";
import { BASE_URL } from "../../constants";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const user = useSelector((state) => state.auth.value.user);

  useEffect(() => {
    let url = BASE_URL + "/post/stream";
    const sse = new EventSource(url);

    sse.addEventListener("post-list-event", (event) => {
      const data = JSON.parse(event.data);
      setPosts(data);
    });

    sse.onerror = () => {
      sse.close();
    };
    return () => {
      sse.close();
    };
  }, []);

  // useEffect(() => {
  //   loadAllPosts();
  // }, []);

  const createPostFunction = async () => {
    if (content != "") {
      await createPost({
        user,
        content,
      });
      setContent("");
      // loadAllPosts();
    } else {
      alert("Error!");
    }
  };

  // const loadAllPosts = async () => {
  //   try {
  //     const response = await getAllPosts();
  //     setPosts(response.data);
  //   } catch (error) {}
  // };

  return (
    <div className="homePage">
      <NavbarComponent />
      <CreatePostComponent
        createPostFunction={createPostFunction}
        content={content}
        setContent={setContent}
      />
      {/* <FiRefreshCw onClick={loadAllPosts} className="refresh" size={35} /> */}
      <PostListComponent posts={posts} activeUser={user} />
    </div>
  );
};

export default HomePage;
