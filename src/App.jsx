import React from "react";
import { Provider } from "react-redux";
import Store from "./store";
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
