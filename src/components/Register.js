import React, { Component } from "react";
import firebase from "../firebase";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ error: null });
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.state.form.email,
        this.state.form.password
      )
      .then(a => {
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(function() {
            console.log("se envio el mail de confirmacion");
          });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
  };

  handleInput = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
  };

  render() {
    // let passwordClass = this.state.form.password.
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-danger">
              {this.state.error ? this.state.error.message : ""}
            </p>
            <form>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  onChange={this.handleInput}
                  className="form-control"
                  value={this.state.form.email}
                  name="email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  onChange={this.handleInput}
                  className={"form-control" /* + passwordClass */}
                  value={this.state.form.password}
                  name="password"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.handleSubmit}>
                  Registrarme
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
