import React from "react";

const AgentSection = () => {
  return (
    <section className="containerFunctions">
      <div className="containerTitle">
        <h1>Agentes Controladores</h1>
      </div>
      <div className="containerAgentes">
        <a href="../PAGES/CONTROLADOR/Astra.html" className="cardLink">
          <div className="cardAgentes astra">
            <div className="containerImgFunc">
              <img
                src="../IMAGES/CONTROLADORES/ASTRA.png"
                alt="Astra"
                className="cardAgentesImage"
              />
              <div>
                <p className="cardAgentesFuncao">Controlador</p>
              </div>
            </div>
            <h1 className="cardAgentesTitle">Astra</h1>
            <p className="cardAgentesParagrafo">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              dolorem qui cupiditate illo facere voluptatem dicta? Inventore
              totam, perferendis quasi dolorum nostrum tempora, consequatur
              cumque quam dolores perspiciatis repellat nulla.
            </p>
            <ul className="containerHabilidades">
              <li className="habilidade h1">Estrela</li>
              <li className="habilidade h2">Poço Gravitacional</li>
              <li className="habilidade h3">Pulso de Nova</li>
              <li className="habilidade h4">Nebulosa</li>
              <li className="habilidade h5">Divisa Cósmica</li>
            </ul>
          </div>
        </a>
      </div>
    </section>
  );
};

export default AgentSection;
