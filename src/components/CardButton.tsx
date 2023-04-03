const CardButtons = ({ activeCard, setActiveCard }: any) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "4px 0" }}
    >
      <button
        onClick={() => setActiveCard("about")}
        style={{ marginRight: "4px" }}
      >
        About
      </button>
      <button
        onClick={() => setActiveCard("baseStats")}
        style={{ marginRight: "4px" }}
      >
        Base Stats
      </button>
      <button
        onClick={() => setActiveCard("evolution")}
        style={{ marginRight: "4px" }}
      >
        Evolution
      </button>
      <button onClick={() => setActiveCard("evomoveslution")}>Moves</button>
    </div>
  );
};

export default CardButtons;
