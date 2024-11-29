import React from "react";

function Card({ title, image, content, tags }) {
  const tagColors = {
    html: "success",
    css: "primary",
    js: "warning",
    php: "info",
  };

  const placeholderImage = "https://placehold.co/600x400";

  return (
    <div className="card">
      <img
        src={image || placeholderImage}
        className="card-img-top img-fluid"
        alt={title}
      />
      <div className="card-body text-start">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <div className="mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`badge text-white bg-${
                tagColors[tag] || ""
              } d-inline-block mb-2 me-2`}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <a href="#" className="btn btn-warning text-white">
          LEGGI DI PIÙ
        </a>
      </div>
    </div>
  );
}

export default Card;
