import React from "react";
import Routes from "./Routes";
import Navega from "./Nav";


class App extends React.Component {

  render() {
    return (
      <>
        <Navega />
        <div className="mt-3">
          <Routes />
        </div>
      </>
    );
  }
}

export default App;
