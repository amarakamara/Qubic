import React from "react";
import OnboardForm from "../components/OnboardForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Onboard() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Onboarding - Join Us Today!</title>
        <meta
          name="description"
          content="Welcome to the onboarding page. Complete your details and get started with our platform. We are excited to have you!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Onboarding - Join Us Today!" />
        <meta
          property="og:description"
          content="Welcome to the onboarding page. Complete your details and get started with our platform. We are excited to have you!"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.qubicpro.online/onboarding" />
      </Helmet>

      <div className="w-full h-full flex justify-center">
        <OnboardForm />
      </div>
    </HelmetProvider>
  );
}
