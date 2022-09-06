import React, { useState } from "react";
import "../scss/formSection.scss";
import ItemsFormSection from "./ItemsFormSection";
import BagsFormSection from "./BagsFormSection";
import LocationFormSection from "./LocationFormSection";
import AddressFormSection from "./AddressFormSection";
import SummaryFormSection from "./SummaryFormSection";

function FormSection() {
  const [step, setStep] = useState(0);

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
      return <ItemsFormSection />;
    } else if (step === 1) {
      return <BagsFormSection />;
    } else if (step === 2) {
      return <LocationFormSection />;
    } else if (step === 3) {
      return <AddressFormSection />;
    } else if (step === 4) {
      return <SummaryFormSection />;
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
            <div className="app__form-buttons_container">
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
                <button
                  onClick={() => {
                    setStep((prevState) => prevState + 1);
                  }}
                  className="app__form-btn"
                >
                  Dalej
                </button>
              )}
              {step === 4 && (
                <button onClick={() => {}} className="btn-confirm">
                  Potwierdzam
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
