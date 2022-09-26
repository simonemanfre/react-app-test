import React from "react";

import "./tile.scss";
import Title from "../../atoms/Title/Title";
import Link from "../../atoms/Link/Link";

const Tile = ({ item }) => {
  return (
    <li className="c-tile">
      <header className="c-tile__header">
        <Title tag="h4" size="4" className="c-tile__title">
          {item.title}
        </Title>
      </header>
      <section className="c-tile__text">
        <p>{item.text}</p>
      </section>
      <footer className="c-tile__footer">
        <Link url={item.url} text="Approfondisci" icon="arrow" />
      </footer>
    </li>
  );
};

export default Tile;
