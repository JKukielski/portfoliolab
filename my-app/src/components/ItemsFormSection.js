import React from "react";
import "../scss/itemsFormSection.scss";

function ItemsFormSection() {
  return (
    <div className="app__formItems">
      <form className="app__formItems-form">
        <label className="app__formItems-checkbox_container">
          ubrania, które nadają się do ponownego użycia
          <input
            type="radio"
            id="reusable-clothes"
            name="items"
            value="reusable-clothes"
          />
          <span className="checkmark"></span>
        </label>
        <label className="app__formItems-checkbox_container">
          ubrania, do wyrzucenia
          <input type="radio" id="trash" name="items" value="trash" />
          <span className="checkmark"></span>
        </label>
        <label className="app__formItems-checkbox_container">
          zabawki
          <input type="radio" id="toys" name="items" value="toys" />
          <span className="checkmark"></span>
        </label>
        <label className="app__formItems-checkbox_container">
          książki
          <input type="radio" id="books" name="items" value="books" />
          <span className="checkmark"></span>
        </label>
        <label className="app__formItems-checkbox_container">
          Inne
          <input type="radio" id="other" name="items" value="other" />
          <span className="checkmark"></span>
        </label>
      </form>
    </div>
  );
}

export default ItemsFormSection;
