import React from "react";

import "./card.scss";

import Title from "../../atoms/Title/Title";
import Badge from "../../atoms/Badge/Badge";
import Link from "../../atoms/Link/Link";

const Card = ({ item }) => {
  return (
    <li className="c-card">
      <a href={item.url}>
        <figure className="c-card__picture">
          <img src={item.image} alt="" />
        </figure>
        <div className="c-card__content">
          <header className="c-card__header">
            <Badge text={item.date} className="c-card__badge" />
            <Title tag="h4" size="2" className="c-card__title">
              {item.title}
            </Title>
          </header>
          <footer className="c-card__footer">
            <section className="c-card__text">
              <p>{item.text}</p>
            </section>
            <Link tag="span" text="Vedi" icon="arrow" />
          </footer>
        </div>
      </a>
    </li>
  );
};

export default Card;
