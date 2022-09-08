import React, { Component } from "react";
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  render() {
    return (
      <div className="container">

        <div className="wrapper">
          <div className="form-signin">
            <h1 className="form-signin-heading welcome-title">Login Now</h1>
            <hr class="colorgraph" />
            {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
            {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
            {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
            {this.state.showSuccessMessage && <div>Login successfully</div>}
            <div>
              <label className="login-form">Username</label><br></br>
              <input className="form-control" type="text" name="username" autofocus=""
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label className="login-form">Password</label><br></br>
              <input className="form-control" type="password" name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <button className="btn btn-dark" onClick={this.loginClicked}>Login</button>
          </div>
        </div>
      </div>);
  }

  loginClicked() {
    // // test123, test456
    // if (this.state.username === "test123" && this.state.password === "test456") {
    //   AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
    //   // to use method below, we need to import withNavigation
    //   this.props.navigate(`/welcome/${this.state.username}`);
    // }
    // else {
    //   this.setState({ showSuccessMessage: false });
    //   this.setState({ hasLoginFailed: true });
    // }
    // AuthenticationService
    //   .executeBasicAuthenticationService(this.state.username, this.state.password)
    //   .then(
    //     () => {
    //       AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
    //       // to use method below, we need to import withNavigation
    //       this.props.navigate(`/welcome/${this.state.username}`);
    //     }
    //   )
    //   .catch(
    //     () => {
    //       this.setState({ showSuccessMessage: false });
    //       this.setState({ hasLoginFailed: true });
    //     }
    //   )

    AuthenticationService
      .executeJwtAuthenticationService(this.state.username, this.state.password)
      .then(
        (response) => {
          AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token);
          // to use method below, we need to import withNavigation
          this.props.navigate(`/welcome/${this.state.username}`);
        }
      )
      .catch(
        () => {
          this.setState({ showSuccessMessage: false });
          this.setState({ hasLoginFailed: true });
        }
      )

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    // const { name, value } = event.target;
    // this.setState(
    //   (prevValues) => {
    //     return {
    //       ...prevValues,
    //       [name]: value
    //     }
    //   });
  }
}

export default LoginComponent
