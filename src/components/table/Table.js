import React from "react";
import { connect } from "react-redux";
import "./Table.css";
class Home extends React.Component {
  render() {
    const { lsUsers } = this.props;

    return (
      <div class="container">
        {lsUsers ? (
          <table>
            <tr>
              <th>Nome Usuário</th>
              <th>Email</th>
            </tr>
            {lsUsers &&
              lsUsers.map((value) => (
                <tr>
                  <td>{value.username}</td>
                  <td>{value.email}</td>
                </tr>
              ))}
          </table>
        ) : (
          <div class="loader"></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lsUsers: state.home.payload,
});

export default connect(mapStateToProps)(Home);
