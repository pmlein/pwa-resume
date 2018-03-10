import React from "react";
// for form
import { createStore } from "redux";
import { Provider } from "react-redux";
import { combineForms } from "react-redux-form";

import MyForm from "./contact-form";

import * as styles from "./contact.scss";
import Link from "pawjs/src/components/link";



const initialUser = { name: "" };

const store = createStore(combineForms({
  user: initialUser,
}));





export default class Contact extends React.Component {

  render() {
    return (
      <div className="container text-center">
       <Provider store={ store }>
        <MyForm />
      </Provider>
      
        
          <h2 className={styles["thank-you-note"]}>Thank you for contacting us</h2>
          <p>Go back to <Link to="/">home page</Link></p>
       
      </div>
     
    );
  }
}