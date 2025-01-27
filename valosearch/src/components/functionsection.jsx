import React from "react";

const FunctionsSection = () => {
  const functions = [
    {
      id: "controlador",
      img: "/ICONS/controller-valorant.png",
      title: "Controlador",
      description:
        "Manipula o espaço do mapa, usando habilidades para bloquear a visão inimiga e controlar o posicionamento.",
    },
    {
      id: "duelista",
      img: "/ICONS/duelist-valorant.png",
      title: "Duelista",
      description:
        "Lidera o ataque, usando habilidades agressivas para eliminar oponentes e abrir espaço para sua equipe.",
    },
    {
      id: "iniciador",
      img: "/ICONS/initiator-valorant.png",
      title: "Iniciador",
      description:
        "Desestabiliza a defesa inimiga, usando habilidades para revelar posições e forçar reposicionamentos.",
    },
    {
      id: "sentinela",
      img: "/ICONS/sentinel-valorant.png",
      title: "Sentinela",
      description:
        "Protege áreas importantes, usando habilidades para fortificar a defesa e deter avanços inimigos.",
    },
  ];

  return (
    <section className="containerCard">
      {functions.map((func) => (
        <a href={`#${func.id}`} key={func.id} className="cardLinks">
          <div className={`imgf ${func.id}`}>
            <img src={func.img} alt={func.title} className="cardImg" />
            <p className="imgp">{func.title}</p>
            <p className="cardParagraph">{func.description}</p>
            <span className="clickForMore">Clique para mais!</span>
          </div>
        </a>
      ))}
    </section>
  );
};

export default FunctionsSection;
