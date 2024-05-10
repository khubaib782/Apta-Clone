import React from "react";

const Card = ({ title, imageSrc }) => {
  return (
    <div className="card ">
      <img src={imageSrc} alt={`Image for ${title}`} />
      <h4>{title}</h4>
    </div>
  );
};

export default Card;
