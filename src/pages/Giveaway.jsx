import React, { Suspense, lazy } from "react";
import Cursor from "../components/Cursor";
import LoadingSpinner from "../components/LoadingSpinner";

const GiveawayForm = lazy(() => import("../components/GiveawayForm"));

export default function Onboard() {
  return (
    <>
      <head>
        <title>QubicPro - Giveaway</title>
        <meta
          name="description"
          content="Participate in our exciting giveaway by filling out this form. Take part and win amazing prizes!"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Onboard - Giveaway Form" />
        <meta
          property="og:description"
          content="Participate in our exciting giveaway by filling out this form. Take part and win amazing prizes!"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.yoursite.com/onboard" />
      </head>

      <Cursor />
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      <div className="w-full h-full flex justify-center items-center py-20">
        <Suspense fallback={<LoadingSpinner />}>
          <GiveawayForm />
        </Suspense>
      </div>
    </>
  );
}
