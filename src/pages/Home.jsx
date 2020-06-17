import React from "react";
import Service from "../service/service";
import Store from "../store";
import Table from "../components/table/Table";

class Home extends React.Component {
  componentDidMount() {
    Service.getUser().then((dados) => {
      const { data } = dados.data;
      const action = {
        type: "SAVE_USERS",
        payload: data,
      };
      Store.dispatch(action);
    });
  }

  render() {
    return <> {<Table />}</>;
  }
}

export default Home;
