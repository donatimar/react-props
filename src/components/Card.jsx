import React from "react";
import image from "../assets/images.png";

function Card() {
  return (
    <div className="card" style={{ width: "30rem" }}>
      <img src={image} className="card-img-top img-fluid" alt="Placeholder" />
      <div className="card-body text-start">
        <h5 className="card-title">Titolo del post</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          perferendis cumque numquam illo non ducimus hic veritatis est quae
          maxime sint quia laudantium nesciunt, iste ipsa magni atque ratione
          libero?
        </p>
        <a href="#" className="btn custom-btn">
          LEGGI DI PIU'
        </a>
      </div>
    </div>
  );
}

export default Card;
