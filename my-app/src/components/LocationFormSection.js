import React from "react";

function LocationFormSection() {
  return (
    <div className="app__formLocation">
      <form className="app__formLocation-form">
        <div className="app__formLocation-form_select-container">
          <select name="" id="">
            <option value="Warszawa">Warszawa</option>
            <option value="Poznań">Poznań</option>
            <option value="Kraków">Kraków</option>
            <option value="Wrocław">Wrocław</option>
            <option value="Katowice">Katowice</option>
          </select>
        </div>
        <h2 className="app__formLocation-subheading">Komu chcesz pomóc?</h2>
        <div className="app__formLocation-form_checkbox_container">
          <div className="app__formLocation-form_checkbox-element">
            <input
              type="checkbox"
              name="kids"
              id="kids"
              className="app__formLocation-checkbox"
            />
            <label htmlFor="kids">dzieciom</label>
          </div>
          <div className="app__formLocation-form_checkbox-element">
            <input
              type="checkbox"
              name="mothers"
              id="mothers"
              className="app__formLocation-checkbox"
            />
            <label htmlFor="mothers">samotnym matkom</label>
          </div>
          <div className="app__formLocation-form_checkbox-element">
            <input
              type="checkbox"
              name="homeless"
              id="homeless"
              className="app__formLocation-checkbox"
            />
            <label htmlFor="homeless">bezdomnym</label>
          </div>
          <div className="app__formLocation-form_checkbox-element">
            <input
              type="checkbox"
              name="disabled"
              id="disabled"
              className="app__formLocation-checkbox"
            />
            <label htmlFor="disabled">niepełnosprawnym</label>
          </div>
          <div className="app__formLocation-form_checkbox-element">
            <input
              type="checkbox"
              name="elderly"
              id="elderly"
              className="app__formLocation-checkbox"
            />
            <label htmlFor="elderly">osobom starszym</label>
          </div>
        </div>
        <h2 className="app__formLocation-subheading">
          Wpisz nazwę konkretnej organizacji (opcjonalne)
        </h2>
        <input type="text" />
      </form>
    </div>
  );
}

export default LocationFormSection;
