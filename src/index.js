import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return <div>hey</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
