import firebase from "./../firebase";
import React, { Component } from "react";

export class Login extends Component {
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
  /**
|--------------------------------------------------
| comportamiento al presionar submit
|--------------------------------------------------
*/
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ error: null });
    firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.form.email,
        this.state.form.password
      )
      .then(a => {
        console.log("ingreso correcto");
        this.props.history.push("/Home");
      })
      .catch(error => {
        console.log(error);
        this.setState({ error });
      });
  };
  /**
  |--------------------------------------------------
  | comportamiento al ingresar datos en los imputs
  |--------------------------------------------------
  */

  handleInput = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });
  };

  /**
  |--------------------------------------------------
  | vista
  |--------------------------------------------------
  */
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelpId"
                  placeholder="email"
                  onChange={this.handleInput}
                  value={this.state.form.email}
                />
                <small id="emailHelpId" className="form-text text-muted">
                  colocar email
                </small>
              </div>
              <div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={this.handleInput}
                    value={this.state.form.password}
                  />{" "}
                  <small id="emailHelpId" className="form-text text-muted">
                    colocar password
                  </small>
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.handleSubmit}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
