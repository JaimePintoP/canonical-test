import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./components/PostCard/PostCard";

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
    <div className="row u-equal-height u-clearfix">
      <h1>Canonical Test</h1>
      {posts.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </div>
  );
};

export default App;
