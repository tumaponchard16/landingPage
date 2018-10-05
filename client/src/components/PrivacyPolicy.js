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
                  <i className="fa fa-angle-left" aria-hidden="true" /> Back
                </Link>
              </h4>
            </div>
            <Card className="privacy-card">
              <h2 className="display-5 base-color">
                Uudenmaan Ikkunapalvelu Oy's Privacy Policy
              </h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur quam nunc, egestas a vestibulum vitae, iaculis id
                tortor. Phasellus mi metus, finibus vel pretium sed, sagittis
                porttitor augue. Cras nulla nisi, facilisis sed ante in,
                vehicula volutpat ex. Donec quis lectus ac elit suscipit feugiat
                in id ante. Aliquam nunc dolor, volutpat dapibus auctor vel,
                commodo efficitur felis. Vivamus eu auctor nisl, id interdum
                turpis. In purus felis, finibus id nisl in, egestas congue
                ipsum.
              </p>

              <div>
                <h5>Commitment</h5>
                <p>
                  We collect and process your personal information so that we
                  can provide you with products and services. We treat all your
                  personal information confidentially, and protecting your
                  privacy is central to all of our services.
                </p>
                <p>
                  We follow the following five principles to protect your
                  personal information and provide you with a better customer
                  experience:
                </p>
              </div>

              <div>
                <h5>Freedom to choose</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur quam nunc, egestas a vestibulum vitae, iaculis id
                  tortor. Phasellus mi metus, finibus vel pretium sed, sagittis
                  porttitor augue. Cras nulla nisi, facilisis sed ante in,
                  vehicula volutpat ex. Donec quis lectus ac elit suscipit
                  feugiat in id ante.
                </p>
              </div>

              <div>
                <h5>Useful definitions</h5>
                <p>
                  Morbi pretium lectus ut est mattis laoreet. Vestibulum
                  faucibus vehicula massa, a viverra elit consectetur eu.
                  Pellentesque gravida finibus efficitur. Nunc iaculis rhoncus
                  mauris pretium finibus. Donec orci orci, sollicitudin eu nulla
                  id, convallis lacinia quam. Proin malesuada nibh ut
                  ullamcorper mollis.
                </p>

                <p>
                  Aenean gravida mi non nisi pretium sollicitudin. Morbi
                  faucibus metus et magna vestibulum, eget facilisis massa
                  lacinia. Vestibulum vitae justo et tortor pretium malesuada.
                  Nullam tincidunt viverra orci eget auctor. Sed tincidunt
                  pulvinar mauris, id sollicitudin diam bibendum ac. Donec ac
                  massa ultrices, laoreet ex lobortis, auctor enim. Sed molestie
                  vehicula porta.{" "}
                </p>

                <p>
                  Curabitur quis turpis lacus. Vestibulum enim justo,
                  ullamcorper ac vehicula et, tincidunt eget mi. Nam placerat
                  massa tellus. Aenean nec neque non felis pharetra pretium.
                  Fusce lacinia augue tincidunt felis vehicula ultrices. Ut urna
                  dui, hendrerit vel convallis non, vulputate varius erat. In eu
                  justo fermentum, tempus magna sit amet, volutpat metus. Cras
                  et pellentesque lacus.
                </p>

                <p>
                  Aenean volutpat felis at lectus pellentesque, ac dapibus dui
                  congue. Etiam vitae volutpat libero. Suspendisse vel volutpat
                  dui, quis facilisis enim. Sed sagittis tortor vulputate,
                  commodo ligula vel, molestie elit. Aliquam tristique lacus a
                  sapien rutrum, et imperdiet nisl molestie. In hac habitasse
                  platea dictumst.
                </p>
              </div>

              <div>
                <p>..................................</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
