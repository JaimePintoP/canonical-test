import React from "react";
import "./PostCard.css";

const Card = ({ post }) => {
  console.log(post);

  // const date = new Date(post.modified);
  // console.log("DATE:", date);
  return (
    <div className="col-4 blog-p-card--post">
      <header className="card-header">
        <h5 className="p-card__title u-no-margin--botom">CLOUD AND SERVER</h5>
      </header>

      <div className="content-container">
        <img className="p-image" src={post.featured_media} alt="" />

        <h3 className="p-heading--4">
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            {post.title.rendered}
          </a>
        </h3>

        <p className="p-heading--6">
          By{" "}
          <a
            href={post._embedded.author[0].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {post._embedded.author[0].name}
          </a>{" "}
          on {post.modified}
        </p>
      </div>

      <p className="card-footer">Article</p>
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
