import React, { useState } from "react";

const CardButtons = ({ activeCard, setActiveCard }: any) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "4px 0" }}
    >
      <button
        className={activeCard === "about" ? "active" : ""}
        onClick={() => setActiveCard("about")}
        style={{ marginRight: "4px" }}
      >
        About
      </button>
      <button
        className={activeCard === "baseStats" ? "active" : ""}
        onClick={() => setActiveCard("baseStats")}
        style={{ marginRight: "4px" }}
      >
        Base Stats
      </button>
      <button
        className={activeCard === "evolution" ? "active" : ""}
        onClick={() => setActiveCard("evolution")}
        style={{ marginRight: "4px" }}
      >
        Evolution
      </button>
    </div>
  );
};

export default CardButtons;
