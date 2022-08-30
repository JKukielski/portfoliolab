import React, { useState } from "react";
import "../scss/pagination.scss";
import { masterList } from "../constants/listItems";

const Pagination = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);

  return (
    <div className="app__pagination">
      <div className="app__pagination-buttons">
        <button
          onClick={() => {
            setActiveTab(1);
            setCurrentPage(1);
          }}
          className="app__pagination-btn"
        >
          Fundacjom
        </button>
        <button
          onClick={() => {
            setActiveTab(2);
            setCurrentPage(1);
          }}
          className="app__pagination-btn"
        >
          Organizacjom <br /> pozarządowym
        </button>
        <button
          onClick={() => {
            setActiveTab(3);
            setCurrentPage(1);
          }}
          className="app__pagination-btn"
        >
          Lokalnym zbiórkom
        </button>
      </div>
      <div className="app__pagination-description">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </div>
      <ul className="app__pagination-list">
        {masterList[activeTab - 1]
          .slice(perPage * currentPage - perPage, perPage * currentPage)
          .map((element, index) => {
            return (
              <li key={index} className="app__pagination-list_element">
                <div className="app__pagination-list_element-main">
                  <h1 className="app__pagination-list_element-heading">
                    {element.name}
                  </h1>
                  <p className="app__pagination-list_element-description">
                    {element.description}
                  </p>
                </div>

                <p className="app__pagination-list_element-info">
                  {element.info}
                </p>
              </li>
            );
          })}
      </ul>
      <div className="app__pagination-numbers">
        {Array(Math.ceil(masterList[activeTab - 1].length / perPage))
          .fill(1)
          .map((element, index) => {
            return (
              <button
                key={index}
                className="app__pagination-numbers_btn"
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Pagination;
