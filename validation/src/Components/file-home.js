import React, { Component } from 'react';
import {Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import validator from 'validator';
import ThankYou from "./thankyou.js";





class File extends Component {

  state = {
    name: '',
    nameError:'',
    email: "",
    username: "",
    usernameError: "",
    password: "",
    confirm: "",
    passwordError: "",
    website: "",

  }

handleChange = (e) =>{
  this.setState({
    [e.target.name]: e.target.value
  })
}

validation = (e) => {
  e.preventDefault()
    let valid = true
    // if name input is empty
    if (this.state.name.length === 0) {
      valid = false;
      // show error message
      this.setState({
        nameError: 'Cannot be blank',
        nameClass: 'error'
      }) // otherwise no error message
    } else {
      this.setState({
        nameError: '',
        nameClass: ''
      })
    }
    // if email input is empty or not a valid email address
    if (this.state.email.length === 0 && e.target.value !== "email") {
      valid = false;
    }
    // if username input is empty
    if (this.state.username.length === 0) {
      valid = false;
      // show error message
      this.setState({
        usernameError: "Cannot be blank",
        usernameClass: "error"
      }) // otherwise no error
    } else {
      this.setState({
        usernameError: "",
        usernameClass: "",
      })
    }
    // if password input is empty
    if (this.state.password.length === 0) {
      valid = false;
    }
    // if password confirmation doesn't match password input
    if (this.state.confirm !== this.state.password) {
      valid = false;
      // show error message
      this.setState({
        passwordError: "'Passwords do not match'",
        passwordClass: "error",
      }) // otherwise no error
    } else {
      this.setState({
        passwordError: "",
        passwordClass: "",
      })
    }

    if (this.state.website.length === 0) {
      valid = false;
      console.log(this.state.website.value)
    }


    if (valid) {
      this.props.history.push('./thankyou')
    }

}







  render() {
    return (
      <div id="canvas">

        <form onSubmit={this.validation}>
          <label className={this.state.nameClass}>Name {this.state.nameError}</label>
          <input id="enter-name" className={"input " + this.state.nameClass} onChange={this.handleChange} name='name'
           value={this.state.name}>
          </input>
          <label>Email</label>
          <input type="email" id="enter-email" className="input" onChange={this.handleChange} name="email"
          value={this.state.email}>
          </input>
          <label>Username {this.state.usernameError}</label>
          <input id="enter-username" className={"input " + this.state.usernameClass} onChange={this.handleChange} name="username"
          value={this.state.username}>
          </input>
          <label>Password</label>
          <input type="password" id="enter-password" className="input" onChange={this.handleChange} name="password"
          value={this.state.password}>
          </input>
          <label>Confirm Password {this.state.passwordError}</label>
          <input type="password" id="enter-confirm" className={"input " + this.state.passwordClass} onChange={this.handleChange} name="confirm"
          value={this.state.confirm}>
          </input>
          <label>Website</label>
          <input type="url" placeholder="https://..." id="enter-website" className="input" onChange={this.handleChange} name="website"
          value={this.state.website}>
          </input>


          <button type='submit'>Submit</button>
        </form>
      </div>




    )
  }


}






export default File
