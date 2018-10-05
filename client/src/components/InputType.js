import React, { Component } from "react";
import { Input, FormGroup } from "reactstrap";

class InputType extends Component {
  render() {
    return (
      <div>
        <FormGroup>
          <Input
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            size={this.props.size}
            minLength={this.props.minLength}
            maxLength={this.props.maxLength}
            required
          />
        </FormGroup>
      </div>
    );
  }
}

export default InputType;
