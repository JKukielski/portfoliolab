import React from "react";

function SummaryFormSection({
  item,
  bags,
  location,
  people,
  organization,
  address,
  contact,
}) {
  return (
    <div className="app__summary">
      <p>{item}</p>
      <p>{bags}</p>
      <p>{location}</p>
      <p>{people.join(", ")}</p>
      <p>{organization}</p>
      <p>{address.street}</p>
      {/* <p>{address.city}</p>
      <p>{address.postCode}</p>
      <p>{address.number}</p>
      <p>{contact.date}</p>
      <p>{contact.hour}</p>
      <p>{contact.info}</p> */}
    </div>
  );
}

export default SummaryFormSection;
