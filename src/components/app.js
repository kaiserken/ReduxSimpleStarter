import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-3">Kens Blog!</h1>
          <p className="lead">
            This is a simple blog page using Redux, React Router, and a simple jumbotron-style component!
          </p>
          <hr className="m-y-2"/>
        </div>
        {this.props.children}
      </div>
    );
  }
}
