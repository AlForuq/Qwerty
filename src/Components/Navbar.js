import React from 'react'

export const Navbar = ({setPages, pages}) => {
  return (
    <div>
      <button
        style={{ color: pages === "Planets" ? "#ffff57" : "white" }}
        onClick={() => setPages("Planets")}
      >
        Planets
      </button>
      <button
        style={{ color: pages === "People" ? "#ffff57" : "white" }}
        onClick={() => setPages("People")}
      >
        People
      </button>
    </div>
  );
}
