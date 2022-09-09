import React from "react";
import "../scss/addressFormSection.scss";

function AddressFormSection({
  address,
  contact,
  handleAddressChange,
  handleContactChange,
  handleBackClick,
  handleForwardClick,
}) {
  return (
    <div className="app__formAddress">
      <form action="" className="app__formAddress-form">
        <div className="app__formAddress-form-address_container">
          <h2 className="app__formAddress-subheading">Adres odbioru:</h2>
          <div className="app__formAddress-form_content-container">
            <div className="app__formAddress-form-address_element">
              <label htmlFor="street">Ulica</label>
              <input
                type="text"
                id="street"
                name="street"
                value={address.street}
                onChange={handleAddressChange}
              />
            </div>
            <div className="app__formAddress-form-address_element">
              <label htmlFor="city">Miasto</label>
              <input
                type="text"
                id="city"
                name="city"
                value={address.city}
                onChange={handleAddressChange}
              />
            </div>
            <div className="app__formAddress-form-address_element">
              <label htmlFor="postcode">
                Kod <br /> pocztowy
              </label>
              <input
                type="text"
                id="postcode"
                name="postCode"
                value={address.postCode}
                onChange={handleAddressChange}
              />
            </div>
            <div className="app__formAddress-form-address_element">
              <label htmlFor="number">
                Numer <br /> telefonu
              </label>
              <input
                type="text"
                id="number"
                name="number"
                value={address.number}
                onChange={handleAddressChange}
              />
            </div>
          </div>
        </div>
        <div className="app__formAddress-form-date_container">
          <h2 className="app__formAddress-subheading">Termin odbioru:</h2>
          <div className="app__formAddress-form_content-container">
            <div className="app__formAddress-form-date_element">
              <label htmlFor="date">Data</label>
              <input
                type="text"
                id="date"
                name="date"
                value={contact.date}
                onChange={handleContactChange}
              />
            </div>
            <div className="app__formAddress-form-date_element">
              <label htmlFor="hour">Godzina</label>
              <input
                type="text"
                id="hour"
                name="hour"
                value={contact.hour}
                onChange={handleContactChange}
              />
            </div>
            <div className="app__formAddress-form-date_element">
              <label htmlFor="info">
                Uwagi <br /> dla kuriera
              </label>
              <textarea
                type="text"
                cols="20"
                rows="5"
                id="info"
                name="info"
                value={contact.info}
                onChange={handleContactChange}
              />
            </div>
          </div>
        </div>
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

export default AddressFormSection;
