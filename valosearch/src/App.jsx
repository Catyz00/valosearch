import React from "react";
import Header from "./components/header";
import SearchSection from "./components/searchsection";
import FunctionsSection from "./components/functionsection";
import AgentSection from "./components/agentsection";

const App = () => {
  return (
    <div>
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
