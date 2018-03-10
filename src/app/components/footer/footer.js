import React from "react";
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
*/


import * as styles from "./footer.scss";

const Footer = () => {
  "use strict";
  return (
    <footer className={styles.footer} >
      <div className="container ">
       <div class="d-flex justify-content-between bd-highlight mb-3 example-parent">
         <div className="p-1">
            <ul className="nav d-inline-flex flex-row mb-3">
              <li className="nav-item">
                <a href="https://facebook.com"><FaFacebook aria-hidden="true" size={28} style={{marginRight:10}}/></a>
              </li>
              <li className="nav-item">
                <FaGithub aria-hidden="true" size={28} style={{marginRight:10}}/>
              </li>
              <li className="nav-item">
                <FaLinkedin aria-hidden="true" size={28} style={{marginRight:10}}/>
              </li>
              <li className="nav-item">
                <FaCodepen aria-hidden="true" size={28}/>
              </li>
             </ul>
           </div> 
         <div className="p-2">Copyright </div>
        <div className="p-2">
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