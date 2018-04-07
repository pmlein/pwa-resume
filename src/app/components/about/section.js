import React from "react";
import _ from "lodash";

export default (props) => {
  "use strict";

  switch(_.get(props, "match.params.section", "")) {
    case "about":
    default:
      return (
        <div>
        <h3>Software Development</h3>
         <div class="row">
          <div class="col-sm-6">
            <h4 className="h4">Languages</h4>
            <ul>
                <li>Java</li>
                 <li>PHP</li>
                <li>XSLT</li>
                <li>Tcl/Tk</li>
            </ul>
          </div>
          <div class="col-sm-6">
            <h4 className="h4">Tools</h4>
              <ul>
                  <li>Mule ESB</li>
                   <li>Active MQ</li>
                  <li>AWS Cloud9</li>
                  <li>MongoDB</li>
                </ul>
          </div>
        </div>         
     </div>    
    
      );
    case "web-development":
      return (
        <div>
        <h3>Web Development</h3>
         <div class="row">
          <div class="col-sm-6">
            <h4 className="h4">Languages</h4>
            <ul>
                <li>JavaScript</li>
                 <li>PHP</li>
                 <li>HTML</li>
                 <li>CSS</li>
            </ul>
          </div>
          <div class="col-sm-6">
            <h4 className="h4">Tools and Techniques</h4>
              <ul>
                  <li>ExpressJS</li>
                   <li>ReactJS</li>
                  <li>AWS Cloud9</li>
                  <li>MongoDB, SQLite, MySQL</li>
                </ul>
          </div>
        </div>         
     </div>    
      );
    case "other":
      return (
        <div>
          <div>
            <h2 className="h2">Other techniques and tools</h2>
            <ul>
              <li>Git</li>
              <li>Scrum</li>
            </ul>
            <h3>Currently Learning</h3>
            <ul>
              <li>Elasticsearch</li>
              <li>Progressive Web Applications</li>
            </ul>
          </div>
        </div>
      );
  }
};