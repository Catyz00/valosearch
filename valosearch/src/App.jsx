import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importe o arquivo CSS aqui
import Header from './components/header';
import SearchSection from './components/searchsection';
import FunctionsSection from './components/functionsection';
import AgentSection from './components/agentsection';

// Defina o componente App
const App = () => {
  return (
    <div>
      <p>Oiee</p>
      <Header className="bg-blue-500 text-white p-4" />
      <main>
        <SearchSection />
        <FunctionsSection />
        <AgentSection />
      </main>
    </div>
  );
};

// Renderize o componente App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;