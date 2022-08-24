import React from "react";
import "../scss/pagination.scss";
import PaginationElements from "./PaginationElements";

const Pagination = () => {
  return (
    <div className="app__pagination">
      <div className="app__pagination-buttons">
        <button className="app__pagination-btn">Fundacjom</button>
        <button className="app__pagination-btn">
          Organizacjom <br /> pozarządowym
        </button>
        <button className="app__pagination-btn">Lokalnym zbiórkom</button>
      </div>
      <div className="app__pagination-description">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </div>
      <PaginationElements />
    </div>
  );
};

export default Pagination;
