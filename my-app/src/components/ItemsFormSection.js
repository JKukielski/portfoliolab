import React from "react";

function ItemsFormSection() {
  return (
    <div className="app__formItems">
      <form className="app__formItems-form">
        <div className="app__formItems-checkbox_container">
          <input
            type="checkbox"
            id="reusable-clothes"
            name="reusable-clothes"
            value="reusable-clothes"
          />
          <label htmlFor="reusable-clothes">
            ubrania, które nadają się do ponownego użycia
          </label>
        </div>
        <div className="app__formItems-checkbox_container">
          <input type="checkbox" id="trash" name="trash" value="trash" />
          <label htmlFor="trash">ubrania, do wyrzucenia</label>
        </div>
        <div className="app__formItems-checkbox_container">
          <input type="checkbox" id="toys" name="toys" value="toys" />
          <label htmlFor="toys">Zabawki</label>
        </div>
        <div className="app__formItems-checkbox_container">
          <input type="checkbox" id="books" name="books" value="books" />
          <label htmlFor="books">Książki</label>
        </div>
        <div className="app__formItems-checkbox_container">
          <input type="checkbox" id="other" name="other" value="other" />
          <label htmlFor="other">Inne</label>
        </div>
      </form>
    </div>
  );
}

export default ItemsFormSection;
