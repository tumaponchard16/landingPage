import React, { Component } from "react";
import "./App.css";
import Index from "./components/Index";

import CookieBanner from "react-cookie-banner";

import Privacy from "./components/PrivacyPolicy";
import ThankYou from "./components/ThankYou";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { dismissOnScroll: false, dismissOnClick: false };
  }
  render() {
    return (
      <div className="App">
        <CookieBanner
          styles={{
            banner: { position: "fixed", backgroundColor: "#000" },
            message: { textAlign: "center", marginRight: "15px" },
            button: { right: "auto", backgroundColor: "#FFF" }
          }}
          message="Yes, we use cookies. If you don't like it then change website, we won't miss you!"
          onAccept={() => {}}
          cookie="user-has-accepted-cookies"
          dismissOnScroll={this.state.dismissOnScroll}
        />

        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/privacy-policy" component={Privacy} />
            <Route path="/success" component={ThankYou} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
