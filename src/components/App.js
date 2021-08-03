import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get(
        "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
      )
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>App Component</h1>
      <PostCard />
    </div>
  );
};

export default App;
