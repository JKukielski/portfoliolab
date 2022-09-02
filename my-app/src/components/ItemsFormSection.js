import React from "react";

function ItemsFormSection() {
  return (
    <div className="app__formItems">
      <form className="app__formItems-form">
        <div className="app__formItems-checkbox_container">
          <input
            type="radio"
            id="reusable-clothes"
            name="items"
            value="reusable-clothes"
          />
          <label htmlFor="reusable-clothes">
            ubrania, które nadają się do ponownego użycia
          </label>
        </div>
        <div className="app__formItems-checkbox_container">
          <input type="radio" id="trash" name="items" value="trash" />
          <label htmlFor="trash">ubrania, do wyrzucenia</label>
        </div>
        <div className="app__formItems-checkbox_container">
          <input type="radio" id="toys" name="items" value="toys" />
          <label htmlFor="toys">Zabawki</label>
        </div>
        <div className="app__formItems-checkbox_container">
          <input type="radio" id="books" name="items" value="books" />
          <label htmlFor="books">Książki</label>
        </div>
        <div className="app__formItems-checkbox_container">
          <input type="radio" id="other" name="items" value="other" />
          <label htmlFor="other">Inne</label>
        </div>
      </form>
    </div>
  );
}

export default ItemsFormSection;
