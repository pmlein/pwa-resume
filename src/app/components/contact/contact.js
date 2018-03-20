import React, {Component} from "react";
// for form
//import { createStore } from "redux";
//import { Provider } from "react-redux";
//import { combineForms } from "react-redux-form";

import ContactForm from "./contact-form";

import * as styles from "./contact.scss";
import Link from "pawjs/src/components/link";



export default class Contact extends Component {

  render() {
    return (
      <div className="container" >
      
        <ContactForm style={{ maxWidth: "60%"  }}/>
    
      
        
          <h2 className={styles["thank-you-note"]}>Thank you for contacting us</h2>
          <p>Go back to <Link to="/">home page</Link></p>
       
      </div>
     
    );
  }
}