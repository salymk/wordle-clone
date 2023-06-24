import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numOfTries }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations! </strong> Got it in{" "}
        <strong>{numOfTries} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
