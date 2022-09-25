import React from "react";

import "./tile.scss";
import Title from "../../atoms/title/Title";
import Link from "../../atoms/link/Link";

const Tile = (props) => {
  return (
    <li className="c-tile">
      <header className="c-tile__header">
        <Title tag="h4" size="4" className="c-tile__title">
          Impegno per la comunità
        </Title>
      </header>
      <section className="c-tile__text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eveniet
          labore temporibus consectetur earum. Nihil id officia vel voluptatem
          exercitationem ea quas porro non nobis! Tempore officiis rerum
          exercitationem error!
        </p>
      </section>
      <footer className="c-tile__footer">
        <Link url="#" text="Approfondisci" />
      </footer>
    </li>
  );
};

export default Tile;
