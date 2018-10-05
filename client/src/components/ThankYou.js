import React, { Component } from "react";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";

class PrivacyPolicy extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="mb-2">
              <h4>
                <Link to="/">
                  <i class="fa fa-angle-left" aria-hidden="true" /> Back
                </Link>
              </h4>
            </div>
            <Card className="privacy-card">
              <div>
                <h1>Thank you message here!</h1>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
