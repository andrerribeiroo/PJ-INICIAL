import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import ShowEvents from "./components/ShowEvents";
import TestUseState from "./components/TestUseState";
import UseList from "./components/UseList";
import AulaQuatro from "./components/AulaQuatro";

function App() {
  return (
    <>
      <h1>Sou foda</h1>
      <p>
        Lore lore lore lore lore lore lore lore lore lore lore lore lore lore
        lore lore lore lore lore lore lore lore lore lore lore lore lore lore
        lore lore lore lore lore lore lore lore lore lore lore lore lore lore
        lore lore lore lore lore lore lore lore lore
      </p>

      <MyComponent />
      <ShowEvents />
      <TestUseState />
      <AulaQuatro />
    </>
  );
}

export default App;
