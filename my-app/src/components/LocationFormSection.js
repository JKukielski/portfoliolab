import React from "react";
import images from "../constants/images.js";
import "../scss/locationFormSelection.scss";

function LocationFormSection({
  handleLocationChange,
  handlePeopleChange,
  handleOrganizationChange,
  organization,
  handleBackClick,
  handleForwardClick,
}) {
  return (
    <div className="app__formLocation">
      <form className="app__formLocation-form">
        <div className="app__formLocation-form_select-container">
          <select name="" id="" onChange={handleLocationChange}>
            <option value="0">— wybierz —</option>
            <option value="Warszawa">Warszawa</option>
            <option value="Poznań">Poznań</option>
            <option value="Kraków">Kraków</option>
            <option value="Wrocław">Wrocław</option>
            <option value="Katowice">Katowice</option>
          </select>
          <img src={images.ArrowDown} alt="arrowdown" />
        </div>
        <h2 className="app__formLocation-subheading">Komu chcesz pomóc?</h2>
        <div className="app__formLocation-form_checkbox_container">
          <label className="app__formLocation-checkbox_container">
            dzieciom
            <input
              type="checkbox"
              checked="checked"
              name="kids"
              id="kids"
              value="dzieciom"
              onChange={handlePeopleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="app__formLocation-checkbox_container">
            samotnym matkom
            <input
              type="checkbox"
              name="mothers"
              id="mothers"
              value="samotnym matkom"
              onChange={handlePeopleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="app__formLocation-checkbox_container">
            bezdomnym
            <input
              type="checkbox"
              name="homeless"
              id="homeless"
              value="bezdomnym"
              onChange={handlePeopleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="app__formLocation-checkbox_container">
            niepełnosprawnym
            <input
              type="checkbox"
              name="disabled"
              id="disabled"
              value="niepełnosprawnym"
              onChange={handlePeopleChange}
            />
            <span className="checkmark"></span>
          </label>
          <label className="app__formLocation-checkbox_container">
            osobom starszym
            <input
              type="checkbox"
              checked="checked"
              name="elderly"
              id="elderly"
              value="osobom starszym"
              onChange={handlePeopleChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <h2 className="app__formLocation-subheading">
          Wpisz nazwę konkretnej organizacji (opcjonalne)
        </h2>
        <input
          type="text"
          value={organization}
          onChange={handleOrganizationChange}
        />
      </form>
      <div className="app__form-buttons_container">
        <button onClick={handleBackClick} className="app__form-btn">
          Wstecz
        </button>

        <button onClick={handleForwardClick} className="app__form-btn">
          Dalej
        </button>
      </div>
    </div>
  );
}

export default LocationFormSection;
