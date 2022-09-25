import "./App.scss";

import Container from "./components/atoms/Container/Container";
import Title from "./components/atoms/title/Title";
import Button from "./components/atoms/button/Button";
import Link from "./components/atoms/link/Link";
import Badge from "./components/atoms/badge/Badge";

import Tile from "./components/molecules/Tile/Tile";
import Card from "./components/molecules/Card/Card";

function App() {
  return (
    <Container tag="div">
      <Title tag="h1" size="1">
        Infrastruttura e tecnologia dietro alle emozioni
      </Title>
      <Title tag="h2" size="2">
        Infrastruttura e tecnologia dietro alle emozioni
      </Title>
      <Title tag="h3" size="3">
        Infrastruttura e tecnologia dietro alle emozioni
      </Title>
      <Title tag="h4" size="4">
        Infrastruttura e tecnologia dietro alle emozioni
      </Title>
      <Button url="#" text="Approfondisci" />
      <Button secondary url="#" text="Vedi tutto" />
      <Link url="#" text="Approfondisci" />
      <Badge text="30 marzo 2022" />
      <Tile />
      <Card />
    </Container>
  );
}

export default App;
