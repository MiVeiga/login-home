import React from "react";
import Service from "../../service/service";
import "./Login.css";

class Login extends React.Component {
  state = {
    user: "teste@hy.st",
    password: "",
  };
  componentDidMount() {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
  }

  handleUser = (e) => this.setState({ user: e.target.value });
  handlePassword = (e) => this.setState({ password: e.target.value });
  handleLogin = () => {
    const { user, password } = this.state;
    const { postLogin } = Service;
    const payload = {
      email: user,
      password,
    };
    postLogin(payload).then((dados) => {
      localStorage.setItem("token", dados.data.data.token);
      localStorage.setItem("type", dados.data.data.type);
      this.props.history.push("/home");
    });
  };

  render() {
    const { user, password } = this.state;

    return (
      <>
        <div class="container">
          <h2>Login</h2>
          <input
            onChange={(e) => this.handleUser(e)}
            class="input"
            type="input"
            value={user}
          ></input>
          <input
            onChange={(e) => this.handlePassword(e)}
            class="input"
            type="password"
            user={password}
          ></input>
          <button onClick={this.handleLogin} class="input">
            ENTRAR
          </button>
        </div>
      </>
    );
  }
}

export default Login;
