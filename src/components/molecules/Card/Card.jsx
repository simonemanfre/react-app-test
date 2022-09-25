import React from "react";

import "./card.scss";

import Title from "../../atoms/Title/Title";
import Badge from "../../atoms/Badge/Badge";
import Link from "../../atoms/Link/Link";

const Card = () => {
  return (
    <li className="c-card">
      <a href="#">
        <figure className="c-card__picture">
          <img src="https://placeimg.com/640/400/nature" alt="" />
        </figure>
        <div className="c-card__content">
          <header className="c-card__header">
            <Badge text="30 marzo 2022" className="c-card__badge" />
            <Title tag="h4" size="2" className="c-card__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, non.
            </Title>
          </header>
          <footer className="c-card__footer">
            <section className="c-card__text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Numquam amet quod magnam consequatur rerum sunt rem fuga nobis,
                corporis dicta reiciendis vel qui impedit repellendus! Assumenda
                quod qui sint hic suscipit aperiam eos, totam corrupti rem
                expedita iste delectus laborum?
              </p>
            </section>
            <Link tag="span" text="Vedi" icon="arrow-right" />
          </footer>
        </div>
      </a>
    </li>
  );
};

export default Card;
