import "./App.scss";

import home from "./data/data.json";

import Icons from "./components/atoms/Icons/Icons";
import Hero from "./components/organisms/Hero/Hero";
import Tiles from "./components/organisms/Tiles/Tiles";
import Accordion from "./components/organisms/Accordion/Accordion";
import Cards from "./components/organisms/Cards/Cards";

function App() {
  return (
    <>
      <Icons />
      <Hero data={home.hero} />
      <Tiles data={home.tiles} />
      <Accordion data={home.accordion} />
      <Cards data={home.cards} />
    </>
  );
}

export default App;
