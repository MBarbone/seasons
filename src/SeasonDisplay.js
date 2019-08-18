import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "Winter" ? "Burrr it's cold!" : "Let's hit the beach!";

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
