import React, { useState } from "react";
import "../scss/formSection.scss";
import ItemsFormSection from "./ItemsFormSection";
import BagsFormSection from "./BagsFormSection";
import LocationFormSection from "./LocationFormSection";
import AddressFormSection from "./AddressFormSection";
import SummaryFormSection from "./SummaryFormSection";
import { useNavigate } from "react-router-dom";
import ThankYouSection from "./ThankYouSection";

function FormSection() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [item, setItem] = useState("");
  const [bags, setBags] = useState("");
  const [location, setLocation] = useState("");
  const [people, setPeople] = useState([]);
  const [organization, setOrganization] = useState("");
  const [address, setAddress] = useState({
    street: "",
    city: "",
    postCode: "",
    number: "",
  });
  const [contact, setContact] = useState({
    date: "",
    hour: "",
    info: "",
  });

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };
  const handleBagsChange = (e) => {
    setBags(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePeopleChange = (e) => {
    setPeople((prevState) => [e.target.value, ...prevState]);
  };

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleForwardClick = () => {
    setStep((prevState) => prevState + 1);
  };

  const handleBackClick = () => {
    setStep((prevState) => prevState - 1);
  };

  const StepHeadings = [
    "Zaznacz co chcesz oddać:",
    "Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:",
    "Lokalizacja:",
    "Podaj adres oraz termin odbioru rzeczy przez kuriera",
    "Podsumowanie Twojej darowizny",
  ];

  const InformationSubheading = [
    "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.",
    "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.",
    "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
    "Podaj adres oraz termin odbioru rzeczy.",
  ];

  const PageDisplay = () => {
    if (step === 0) {
      return (
        <ItemsFormSection
          item={item}
          handleForwardClick={handleForwardClick}
          handleItemChange={handleItemChange}
          error={error}
        />
      );
    } else if (step === 1) {
      return (
        <BagsFormSection
          bags={bags}
          handleForwardClick={handleForwardClick}
          handleBagsChange={handleBagsChange}
          handleBackClick={handleBackClick}
          error={error}
        />
      );
    } else if (step === 2) {
      return (
        <LocationFormSection
          handleLocationChange={handleLocationChange}
          location={location}
          handlePeopleChange={handlePeopleChange}
          people={people}
          organization={organization}
          handleOrganizationChange={handleOrganizationChange}
          handleForwardClick={handleForwardClick}
          handleBackClick={handleBackClick}
        />
      );
    } else if (step === 3) {
      return (
        <AddressFormSection
          address={address}
          handleAddressChange={handleAddressChange}
          contact={contact}
          handleContactChange={handleContactChange}
          handleForwardClick={handleForwardClick}
          handleBackClick={handleBackClick}
        />
      );
    } else if (step === 4) {
      return (
        <SummaryFormSection
          item={item}
          bags={bags}
          location={location}
          people={people}
          organization={organization}
          address={address}
          contact={contact}
          handleForwardClick={handleForwardClick}
        />
      );
    } else if (step === 5) {
      return <ThankYouSection />;
    }
  };

  return (
    <div className="app_">
      {step <= 3 && (
        <div className="app__dashboardInformation" id="oddaj-rzeczy">
          <h1 className="app__dashboardInformation-heading">Ważne!</h1>
          <p className="app__dashboardInformation-text">
            {InformationSubheading[step]}
          </p>
        </div>
      )}
      <div className="app__form-section">
        <div className="app__form">
          {step <= 3 && (
            <p className="app__form-steps">{`Krok ${step + 1}/4`}</p>
          )}
          <div className="app__form-container">
            <div className="app__form-heading">
              <h1 className="app__form-heading_content">
                {StepHeadings[step]}
              </h1>
            </div>
            <div className="app__form-inputs_container">{PageDisplay()}</div>

            {/* <div
              className="app__form-buttons_container"
              style={{ bottom: step === 4 && "0" }}
            >
              {step > 0 && (
                <button
                  onClick={() => {
                    setStep((prevState) => prevState - 1);
                  }}
                  className="app__form-btn"
                >
                  Wstecz
                </button>
              )}
              {step < 4 && (
                <button onClick={handleForwardClick} className="app__form-btn">
                  Dalej
                </button>
              )}
              {step === 4 && (
                <button onClick={handleForwardClick} className="btn-confirm">
                  Potwierdzam
                </button>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
