import React, { Fragment } from "react";
import "./Content.css";
import Card from "./Card";
import image1 from "../assets/a.png";
import image2 from "../assets/b.png";
import image3 from "../assets/c.png";

const CardList = () => {
  const cardsData = [
    { title: "Happy Holidays From APTA!", imageSrc: image1 },
    {
      title:
        "Medicare Physician Fee Schedule Cuts Coming in January. Is Help on the Way?",
      imageSrc: image2,
    },
    {
      title: "New CPT Codes Will Support the Critical Role of Caregivers",
      imageSrc: image3,
    },
  ];

  return (
    <Fragment>
      <div className="row ">
        <div className="col-12">
          <h4 className="heading1 mt-5 ml-3 pl-3">Featured Content</h4>
        </div>
      </div>
      <div className="row card-list d-flex flex-wrap align-items-start pl-3">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className=" mb-4"
            title={card.title}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default CardList;
