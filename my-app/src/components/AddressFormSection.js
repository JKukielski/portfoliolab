import React from "react";

function AddressFormSection() {
  return (
    <div className="app__formAddress">
      <form action="" className="app__formAddress-form">
        <div className="app__formAddress-form-address_container">
          <h2 className="app__formAddress-subheading">Adres odbioru:</h2>
          <div className="app__formAddress-form-address_element">
            <label htmlFor="street">Ulica</label>
            <input type="text" id="street" />
          </div>
          <div className="app__formAddress-form-address_element">
            <label htmlFor="city">Miasto</label>
            <input type="text" id="city" />
          </div>
          <div className="app__formAddress-form-address_element">
            <label htmlFor="postcode">
              Kod <br /> pocztowy
            </label>
            <input type="text" id="postcode" />
          </div>
          <div className="app__formAddress-form-address_element">
            <label htmlFor="number">
              Numer <br /> telefonu
            </label>
            <input type="text" id="number" />
          </div>
        </div>
        <div className="app__formAddress-form-date_container">
          <h2 className="app__formAddress-subheading">Termin odbioru:</h2>
          <div className="app__formAddress-form-date_element">
            <label htmlFor="date">Data</label>
            <input type="text" id="date" />
          </div>
          <div className="app__formAddress-form-date_element">
            <label htmlFor="hour">Godzina</label>
            <input type="text" id="hour" />
          </div>
          <div className="app__formAddress-form-date_element">
            <label htmlFor="info">
              Uwagi <br /> dla kuriera
            </label>
            <input type="text" id="info" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddressFormSection;
