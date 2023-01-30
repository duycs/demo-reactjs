import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import Tabs from "./tabs.component";

export default class BoardManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: {}
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        <h1>Management</h1>
        <Tabs>
          <div label="Test 1">
            <span>{this.state.content.description}</span>
            <h5>Logs</h5>
            <span>Real time logs go here</span>
            {/* TODO
            {this.state.content.logs.forEach(element => {
              <span>{element}</span>
            })
            } */}
            <span></span>
          </div>
          <div label="Test 2">
            <span>{this.state.content.description}</span>
            <h5>Logs</h5>
            <span>Real time logs go here</span>
          </div>
          <div label="Test 3">
            <span>{this.state.content.description}</span>
            <h5>Logs</h5>
            <span>Real time logs go here</span>
          </div>
          <div label="Test 4">
            <span>{this.state.content.description}</span>
            <h5>Logs</h5>
            <span>Real time logs go here</span>
          </div>
        </Tabs>
      </div>
    );
  }
}
