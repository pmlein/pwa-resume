import React, {Component} from "react";
//import { connect } from "react-redux";
//import { Control, Form } from "react-redux-form";
//import * as styles from "./contact.scss";
 import classNames from 'classnames'; //To dynamically assign class to each form-group div that will apply an error class if the form input is invalid
 import validator from 'validator';
 
 import axios from 'axios';
 //import validator from 'react-bootstrap-validtion';
class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
          name: {value: '', isValid: true, message: ''},
          email: {value: '', isValid: true, message: ''},
          subject: {value: '', isValid: true, message: ''},
          usermessage: {value: '', isValid: true, message: ''},
        };
    }
    
    onChange = (e) => {
      var state = this.state;
      state[e.target.name].value = e.target.value;
      
      this.setState(state);
    }
    

    
  onSubmit = (e) => {
        e.preventDefault();
        this.resetValidationStates(); //reset states before the validation procedure is run.
        
        if (this.formIsValid()) {
          //handle form processing here
          const { name, email, subject, message } = this.state;
          
          axios.post('/', { name, email, subject, message })
          .then((result) => {
            //access the results here....
            console.log('Result', result);
          });
        }
        
  }
  
  resetValidationStates = () => {
    var state = this.state;
    
    Object.keys(state).map(key => {
      if (state[key].hasOwnProperty('isValid')) {
        state[key].isValid = true;
        state[key].message = '';
      }
    });
    this.setState(state);
  }
  
  formIsValid = () => {
    var state = this.state;
  
    if (!state.name.value) {
      state.name.isValid = false; // will trigger the has-error class
      state.name.message = 'Not a valid name'; // displayed in the help-block
      
       this.setState(state);
        return false;
    }    
    if (!validator.isEmail(state.email.value)) {
      state.email.isValid = false; // will trigger the has-error class
      state.email.message = 'Not a valid email address'; // displayed in the help-block
      
       this.setState(state);
        return false;
    }
    if (!state.subject.value) {
      state.subject.isValid = false;
      state.subject.message = 'Not a valid subject';
      
       this.setState(state);
        return false;
    }
    return true;
  }
  
  render() {
    var {name,email,subject,usermessage} = this.state;
    /* Following group classes will include the 'form-group' class and 
       will include the 'has-error' class if the isValid value is false
     */
      var nameGroupClass = classNames('form-group', {'has-error': !name.isValid});
      var emailGroupClass = classNames('form-group', {'has-error': !email.isValid});
      var subjectGroupClass = classNames('form-group', {'has-error': !subject.isValid});
      var usermessageGroupClass = classNames('form-group', {'has-error': !usermessage.isValid});
      return (
          <div className="container" >
            <form className="form-block" onSubmit={this.onSubmit}>
              <h2>Contact form</h2>
              
              <div className={nameGroupClass}>
                <input type="text" name="name" className="form-control"
                  placeholder="Name" value={name.value} onChange={this.onChange} autoFocus />
                <span className="help-block"></span>
              </div>
              
              <div className={emailGroupClass}>
                <input type="text" name="email" className="form-control"
                  placeholder="Email address" value={email.value} onChange={this.onChange} />
                <span className="help-block"></span>
              </div>
              <div className={subjectGroupClass}>
                <input type="text" name="subject" className="form-control"
                  placeholder="Subject" value={subject.value} onChange={this.onChange} />
                <span className="help-block"></span>
              </div>
              <div className={usermessageGroupClass}>
                <input type="text" name="usermessage" className="form-control"
                  placeholder="Message" value={usermessage.value} onChange={this.onChange}  />
                <span className="help-block"></span>
              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// No need to connect()!
export default ContactForm;