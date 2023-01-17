import React, { Component } from "react";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

export default class Help extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "Help content"
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
