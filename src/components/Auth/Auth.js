import React, { Component } from 'react';

class Auth extends Component {
  render() {
    return (
      <form onSubmit = {this.props.login}
            className = "AddNews-form" >
        <h1 className = "addNewsTitle" > Log in to add news </h1>
        <input className = "formText"
          type = "email"
          name = "email"
          placeholder = "Email"
          autoComplete = "off"
          value={this.props.email} 
          onChange={this.props.change}/>
    
        <br/>
        <input className = "formText"
          type = "password"
          name = "pass"
          placeholder = "Password"
          value = {this.props.pass}
          onChange = {this.props.change}
        />

        <br/>
        <input className="formSubmit" type="submit" placeholder="Add News"/>
      </form>
    );
  }
}

export default Auth;
