import React, {Component} from "react";
//import Fold from "pawjs/src/components/fold";
import Face from "src/resources/images/small_img.jpg";
//import Picture from "pawjs/src/components/picture/picture";
import * as styles from "./home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="mt-4">
        <img style={{ maxWidth: "150px"  }} className="img-fluid mx-auto d-block" src={Face} alt="ReactJS"/>
        <h1 className="h2 text-center mt-3">Hello</h1>
  
        <p className="mt-3">
        I am Paula, a Software Developer from Kuopio who likes to
        learn new programming languages and techniques and try new ways of doing things.
        </p>
        
      </div>
    );
  }
}