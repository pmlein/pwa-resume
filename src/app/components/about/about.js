
import React, {Component} from "react";
import classNames from "classnames";
import Link from "pawjs/src/components/link";
import {renderSubRoutes} from "pawjs/src/utils/renderer";
import Transition from "pawjs/src/components/transition";
import * as styles from "./about.scss";

export default class About extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-sm-3 blog-sidebar">
          <div className={
          ("sidebar-module", styles["sidebar-module-inset"])}>
            <h4>Professional Skills</h4>
            <p>
              I am more experienced as a back end developer but I have 
              also made some front end development projects. I am facinated about 
             the principle that less is more, 
             while carefully including important functioning and details
             .
            </p>
          </div>
          <div className={styles["sidebar-module"]}>
            <h4>Capabilities</h4>
            <ol className="list-unstyled">
              <li><Link to="/about/about" animateSection="about-section" >Software development</Link></li>
              <li><Link to="/about/web-development" animateSection="about-section">Web development</Link></li>
              <li><Link to="/about/other" animateSection="about-section">Other techniques and tools</Link></li>
            </ol>
          </div>
        </div>
        <div className="pl-4 col-sm-6">
          <Transition
            sectionName="about-section"
            className={styles["animator"]}
            onEnterClassName={styles["fade-in"]}
            onExitClassName={styles["fade-out"]}
          >
            {renderSubRoutes(this)}
          </Transition>
        </div>
      </div>
    );
  }
}

