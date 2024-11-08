import React from "react";
import "./AboutCards.css";
import Image from "../../../../assets/footerCardsImgLeft.png";

const AboutCardsLeft = ({ title }) => {
  return (
    <div id="AboutCardsContainer">
      <div className="AboutCardsContainerRight">
        <img
          className="AboutCardsContainerRightImage"
          style={{ width: "100%" }}
          src={Image}
          alt=""
        />
      </div>
      <div className="AboutCardsContainerLeft">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          odio iusto hic ullam dolores laborum dolor culpa officiis quas
          voluptate. Placeat, harum dolore? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Voluptatibus culpa perspiciatis deserunt
          autem voluptatem ad similique magnam, explicabo vero velit? Cum sequi
          nam corporis earum velit consectetur unde dolorem quasi, nostrum
          necessitatibus corrupti molestias harum adipisci odit iure reiciendis
          deleniti? Dolorem at minima voluptates animi beatae ad odit.
        </p>
      </div>
    </div>
  );
};

export default AboutCardsLeft;
