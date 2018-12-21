import React, { Component } from "react";
import "./Styles//App.css";
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
        <div className="App bg-dark">
          <Header />
          <Dashboard />>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
