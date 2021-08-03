import React from "react";
import "./PostCard.css";

const Card = ({ post }) => {
  console.log(post);
  return (
    <div>
      <img src={post.featured_media} alt="" />
      <h1>{post.title.rendered}</h1>
      <a href={post.link} target="_blank" rel="noopener noreferrer">
        {post.title.rendered}
      </a>
      <h2>
        by{" "}
        <a
          href={post._embedded.author[0].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {post._embedded.author[0].name}
        </a>
      </h2>
    </div>
  );
  //title: title.rendered
  //title url: link
  //author: embedded.author.name o embedded.author[0].name
  //author url: embedded.author.link o embedded.author[0].link
  //date: modified
  //image: featured_media
};

export default Card;
