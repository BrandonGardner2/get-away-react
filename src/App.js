import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configureStore from "./Store/store";

import Header from "./Components/Utils/Header-Footer/Header";
import Footer from "./Components/Utils/Header-Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className="bg-dark pt-5" style={{ height: "100%" }}>
            <Dashboard />
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
