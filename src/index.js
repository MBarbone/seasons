import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  state = { lat: null, errorMSG: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        console.log(err);
        this.setState({ errorMSG: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMSG && !this.state.lat) {
      return <div>Error: {this.state.errorMSG}</div>;
    }

    if (!this.state.errMSG && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
