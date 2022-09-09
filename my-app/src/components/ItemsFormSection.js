import React from "react";
import "../scss/itemsFormSection.scss";

function ItemsFormSection({ error, handleItemChange, handleForwardClick }) {
  return (
    <div className="app__formItems">
      <form className="app__formItems-form">
        <label className="app__formItems-checkbox_container">
          ubrania, które nadają się do ponownego użycia
          <input
            type="radio"
            id="reusable-clothes"
            name="items"
            value="ubrania, które nadają się do ponownego użycia"
            onChange={handleItemChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="app__formItems-checkbox_container">
          ubrania, do wyrzucenia
          <input
            type="radio"
            id="trash"
            name="items"
            value="ubrania, do wyrzucenia"
            onChange={handleItemChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="app__formItems-checkbox_container">
          zabawki
          <input
            type="radio"
            id="toys"
            name="items"
            value="zabawki"
            onChange={handleItemChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="app__formItems-checkbox_container">
          książki
          <input
            type="radio"
            id="books"
            name="items"
            value="książki"
            onChange={handleItemChange}
          />
          <span className="checkmark"></span>
        </label>
        <label className="app__formItems-checkbox_container">
          Inne
          <input
            type="radio"
            id="other"
            name="items"
            value="inne"
            onChange={handleItemChange}
          />
          <span className="checkmark"></span>
        </label>
      </form>
      <div className="app__form-buttons_container">
        <button onClick={handleForwardClick} className="app__form-btn">
          Dalej
        </button>
      </div>
      <p>{error}</p>
    </div>
  );
}

export default ItemsFormSection;
