import React from "react";
import images from "../constants/images.js";
import "../scss/summaryFormSection.scss";

function SummaryFormSection({
  item,
  bags,
  location,
  people,
  organization,
  address,
  contact,
  handleForwardClick,
}) {
  return (
    <div className="app__summary">
      <div className="app__summary-primaryDetails">
        <h2 className="app__summary-primaryDetails-heading">Oddajesz:</h2>
        <div className="app__summary-primaryDetails-section">
          <img
            className="app__summary-primaryDetails-icon"
            src={images.Icon1}
            alt="tshirt"
          />
          <p className="app__summary-primaryDetails-content">
            {bags} worki, {item}, {people}
          </p>
        </div>
        <div className="app__summary-primaryDetails-section">
          <img
            className="app__summary-primaryDetails-icon"
            src={images.Icon4}
            alt="arrows"
          />
          <p className="app__summary-primaryDetails-content">
            dla lokalizacji: {location}
          </p>
        </div>
      </div>
      <div className="app__summary-details_container">
        <div className="app__summary-address">
          <h2 className="app__summary-address_heading">Adres odbioru:</h2>
          <div className="app__summary-address_content">
            <div className="app__summary-address_element">
              <p className="app__summary-address_content-heading">Ulica</p>
              <p className="app__summary-address_content-info">
                {address.street}
              </p>
            </div>
            <div className="app__summary-address_element">
              <p className="app__summary-address_content-heading">Miasto</p>
              <p className="app__summary-address_content-info">
                {address.city}
              </p>
            </div>
            <div className="app__summary-address_element">
              <p className="app__summary-address_content-heading">
                Kod <br /> pocztowy
              </p>
              <p className="app__summary-address_content-info">
                {address.postCode}
              </p>
            </div>
            <div className="app__summary-address_element">
              <p className="app__summary-address_content-heading">
                Numer <br /> telefonu
              </p>
              <p className="app__summary-address_content-info">
                {address.number}
              </p>
            </div>
          </div>
        </div>
        <div className="app__summary-contact">
          <h2 className="app__summary-contact_heading">Termin odbioru:</h2>
          <div className="app__summary-contact_content">
            <div className="app__summary-contact_element">
              <p className="app__summary-contact_content-heading">Data</p>
              <p className="app__summary-contact_content-info">
                {contact.date}
              </p>
            </div>
            <div className="app__summary-contact_element">
              <p className="app__summary-contact_content-heading">Godzina</p>
              <p className="app__summary-contact_content-info">
                {contact.hour}
              </p>
            </div>
            <div className="app__summary-contact_element">
              <p className="app__summary-contact_content-heading">
                Uwagi <br /> dla kuriera
              </p>
              <p className="app__summary-contact_content-info">
                {contact.info}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="app__form-buttons_container">
        <button onClick={handleForwardClick} className="app__form-confirm_btn">
          Potwierdzam
        </button>
      </div>
    </div>
  );
}

export default SummaryFormSection;
