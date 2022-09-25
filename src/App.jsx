import "./App.scss";

import Icons from "./components/atoms/Icons/Icons";
import Esercizio1 from "./components/organisms/Esercizio1/Esercizio1";
import Esercizio2 from "./components/organisms/Esercizio2/Esercizio2";
import Accordion from "./components/organisms/Accordion/Accordion";
import Esercizio4 from "./components/organisms/Esercizio4/Esercizio4";

function App() {
  return (
    <>
      <Icons />
      <Esercizio1 />
      <Esercizio2 />
      <Accordion />
      <Esercizio4 />
    </>
  );
}

export default App;
