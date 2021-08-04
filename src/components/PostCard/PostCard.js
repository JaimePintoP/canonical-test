import React from "react";
import "./PostCard.css";

const Card = ({ post }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let postDate = new Date(post.modified);
  let month = monthNames[postDate.getMonth()];
  postDate = postDate.toUTCString();
  let day = postDate.split(" ").slice(1, 2).join();
  let year = postDate.split(" ").slice(3, 4).join();

  const date = `${day} ${month} ${year}`;
  return (
    <div className="col-4 blog-p-card--post">
      <header className="card-header">
        <h5 className="p-muted-heading u-no-margin--botom">CLOUD AND SERVER</h5>
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
          on {date}
        </p>
      </div>

      <p className="card-footer">Article</p>
    </div>
  );
};

export default Card;
