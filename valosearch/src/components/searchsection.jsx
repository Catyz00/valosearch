import React from "react";

const SearchSection = () => {
  return (
    <section className="containerP">
      <div className="search">
        <input
          type="text"
          placeholder="Digite o nome de um agente ou mapa ..."
          className="buscar"
        />
        <button type="submit" className="buscarbtn">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </section>
  );
};
