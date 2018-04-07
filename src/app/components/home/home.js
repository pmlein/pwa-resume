import React, { Component } from 'react';
//import Fold from "pawjs/src/components/fold";
import Face from "src/resources/images/small_img.jpg";
//import Picture from "pawjs/src/components/picture/picture";
import Link from "pawjs/src/components/link";
import { renderSubRoutes } from "pawjs/src/utils/renderer";
import Transition from "pawjs/src/components/transition";

//import * as styles from "./home.scss";
import * as styles from "../about/about.scss";
/*
<img style={{ maxWidth: "150px" , borderRadius: "50%" }} className="img-fluid mx-auto d-block" src={Face} alt="ReactJS"/>
*/
const css = `
    .home-p {
         font-size: 150%;
    }
`;


export default class Home extends Component {
    render() {
        return (
            <div className="row mt-3">
       
            <div className="col-sm-3 blog-sidebar">
              <div className={styles["sidebar-module"]}>
                
              </div>
            </div>
            <div className="pl-4 col-sm-6">
               <h1 className="h1 text-center mt-3">Hey there,</h1>
               <p className="home-p"><style>{css}</style>
                I am Paula, a Software Developer based in Kuopio, Finland. I love to learn and experiment new 
                techniques and try out better ways of 
                doing things. My aim is to write elegant and efficient 
                code.
               </p>
            </div>           
      </div>
        );
    }
}
