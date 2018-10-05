import React, { Component } from "react";
import Form from "./ContactForm";
import logo from "./../img/logo.png";
import { Link } from "react-router-dom";

class Index extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 text-white">
              <img src={logo} alt="logo" className="logo img-fluid" />
              <div className="left-content">
                <h4 className="base-color shadowed-text">
                  The window emptiness does not depend on the season
                </h4>
                <h1>
                  <strong>A worry-free window reminder in the winter</strong>
                </h1>
                <p className="card-subtitle">
                  Installation of windows is not seasonal. With a sophisticated
                  window manufacturer, renovating will surely succeed, and our
                  experts will help you get the right solutions for your home or
                  holiday home, professionally installed. Fast, safe and cool!
                </p>
              </div>

              <div className="absolute-bottom-left">
                <p>
                  <small> &copy; 2018 by Kaikki oikeudet pidätetään. </small>

                  <Link to="/privacy-policy">
                    <small>Tietosuojakäytännöt</small>
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-md-5 col-sm-12">
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
