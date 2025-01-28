import React from "react";

import styles from "../src/styles/styles.css";
import Header from "./components/header";
import SearchSection from "./components/searchsection";
import FunctionsSection from "./components/functionsection";
import AgentSection from "./components/agentsection";

const App = () => {
  return (
    <div>
      <p>Oiee</p>
      <Header />
      <main>
        <SearchSection />
        <FunctionsSection />
        <AgentSection />
      </main>
    </div>
  );
};

export default App;
