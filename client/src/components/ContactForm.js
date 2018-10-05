import React, { Component } from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

import InputType from "./InputType";
import { Link, Redirect } from "react-router-dom";
import {
  FormWithConstraints,
  FieldFeedbacks,
  FieldFeedback
} from "react-form-with-constraints";

import axios from "axios";
import Loading from "./LoadingSpinner";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "",
      email: "",
      address: "",
      redirectToNewPage: false,
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.form.validateFields(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    this.form.validateFields();

    if (!this.form.isValid()) {
      console.log("form is invalid: do not submit");
    } else {
      console.log("form is valid: submit");

      const { name, email, number, address } = this.state;

      await this.setState({ loading: true }, () => {
        axios
          .post("/api/form", {
            name,
            email,
            number,
            address
          })
          .then(response => {
            // If message successfully sent
            if (response.data.msg === "success") {
              console.log("successsssss");
              //redirect to new page
              this.setState({ redirectToNewPage: true });
            } else {
              console.log("errrororororor");
            }
          })
          .catch(errors => {
            console.log(errors);
          });
      });
    }
  }

  render() {
    if (this.state.redirectToNewPage) {
      return <Redirect to="/success" />;
    }
    return (
      <div>
        <Card className="contact-card">
          <CardBody className="text-center">
            <CardTitle className="base-color CardTitle mb-3">
              Book a free mapping visit!
            </CardTitle>
            <CardSubtitle className="card-subtitle">
              We will contact you and arrange a meeting with our expert. Here's
              how you can instantly know how to make the most of your remodeling
              and what it costs.
            </CardSubtitle>
          </CardBody>
          <CardBody>
            <FormWithConstraints
              ref={form => (this.form = form)}
              onSubmit={this.handleSubmit}
              noValidate
            >
              <InputType
                name="name"
                type="text"
                placeholder="Nimi *"
                minLength={2}
                maxLength={50}
                onChange={this.handleChange}
              />
              <FieldFeedbacks for="name">
                <FieldFeedback when="*" />
              </FieldFeedbacks>

              <InputType
                type="text"
                name="number"
                size="30"
                placeholder="Puhelin *"
                onChange={this.handleChange}
              />
              <FieldFeedbacks for="number">
                <FieldFeedback when="*" />
              </FieldFeedbacks>

              <InputType
                type="email"
                name="email"
                size="30"
                placeholder="Sähköposti"
                onChange={this.handleChange}
              />
              <FieldFeedbacks for="email">
                <FieldFeedback when="*" />
              </FieldFeedbacks>

              <InputType
                type="text"
                name="address"
                size="250"
                minLength={5}
                placeholder="Osoite"
                onChange={this.handleChange}
              />
              <FieldFeedbacks for="address">
                <FieldFeedback when="*" />
              </FieldFeedbacks>

              <FormGroup check className="mb-3">
                <Label check>
                  <Input type="checkbox" />
                  <small>
                    Minulle saa lähettää sähköisesti tietoa Pihlan tuotteista ja
                    palveluista
                  </small>
                </Label>
              </FormGroup>
              <Button className="btn-block base-bg-color no-border btn-send">
                {this.state.loading ? <Loading /> : "Submit"}
              </Button>
            </FormWithConstraints>
          </CardBody>

          <CardBody>
            <p className="lh-m">
              <small>
                Antamiasi tietoja voidaan käyttää Uudenmaan Ikkunapalvelu oy:n
                tuotteiden ja palvelujen markkinointiin. Sinulla on oikeus
                kieltää suoramarkkinointi milloin tahansa ilman velvoitteita
                (uudenmaanikkunapalvelu@elisanet.fi​​​​​​​). Uudenmaan
                Ikkunapalvelu oy:n{" "}
                <Link to="/privacy-policy">tietosuojakäytäntö</Link>
              </small>
            </p>

            <p className="text-center mt-4">
              Voit myös soittaa meille:{" "}
              <a href="tel:0000 000000">0000 000000</a> (ark. 00-00)
            </p>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ContactForm;
