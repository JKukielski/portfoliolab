import React from "react";
import DashboardHero from "./DashboardHero";
import DashboardInformation from "./DashboardInformation";
import FormSection from "./FormSection";
import ContactForm from "./ContactForm";

const Dashboard = () => {
  return (
    <>
      <DashboardHero />
      <DashboardInformation />
      <FormSection />
      <ContactForm />
    </>
  );
};

export default Dashboard;
