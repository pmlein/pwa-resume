import React from 'react';
import FaFacebook from "react-icons/lib/fa/facebook";
import FaGithub from "react-icons/lib/fa/github";
import FaLinkedin from "react-icons/lib/fa/linkedin";
import FaCodepen from "react-icons/lib/fa/codepen";
//import Link from "pawjs/src/components/link";

/* 
  <ul className="nav d-inline-flex">
        <li className="nav-item">
          <FontAwesome name='faCoffee' />
        </li>
        <li className="nav-item">
          <FontAwesome name='faCoffee' />
        </li>
        </ul>
                  <li className="nav-item">
                <a href="https://facebook.com"><FaFacebook aria-hidden="true" size={28} 
                    style={{marginLeft: 10, marginRight: 14}}/></a>
              </li>
*/


import * as styles from "./footer.scss";

const Footer = () => {
  "use strict";
  return (
    <footer className={styles.footer} >
      <div className="container ">
       <div className="d-flex justify-content-between bd-highlight mb-3 example-parent">
         <div className="p-1.5">
            <ul className="nav d-inline-flex flex-row mb-3">
              <li className="nav-item">
                <a href="https://github.com/pmlein">
                <FaGithub aria-hidden="true" size={28} style={{marginLeft: 10, marginRight:14}}/></a>
              </li>
              <li className="nav-item">
                <a href="https://linkedin.com/in/paulaleinonen">
                <FaLinkedin aria-hidden="true" size={28} style={{marginRight:14}}/></a>
              </li>
              <li className="nav-item">
                <a href="https://codepen.io/pmlein">
                <FaCodepen aria-hidden="true" size={28}/></a>
              </li>
             </ul>
           </div> 
         <div className="p-1.5">&copy; 2017 Paula Leinonen</div>
        <div className="p-1.5">
        <span className="attribution">
          Powered by&nbsp;
          <a
            href="https://github.com/Atyantik/react-pwa"
            target="_blank"
            rel="noopener"
          >
            ReactPWA
          </a>
        </span>
        </div>
      </div>
     </div>
    </footer>
  );
};

export default Footer;