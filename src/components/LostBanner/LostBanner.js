import React from "react";
import Banner from "../Banner/Banner";

function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <p>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </p>
    </Banner>
  );
}

export default LostBanner;
