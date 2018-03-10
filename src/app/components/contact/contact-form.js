import React from "react";
import { connect } from "react-redux";
import { Control, Form } from "react-redux-form";
import * as styles from "./contact.scss";

class MyForm extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }

  render() {
    return (
      <div className="container center">
      <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
        <label>Name</label>
        <Control.text model=".name" />
        <label>Email</label>
        <Control.text model=".email" />
        <button>Submit</button>
      </Form>
      </div>
    );
  }
}

// No need to connect()!
export default MyForm;