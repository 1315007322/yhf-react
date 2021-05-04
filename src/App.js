import logo from "./logo.svg";
import CC from "./ClassComponent";
import React from "react";
import Fc from "./fc";
import "./App.css";

// class Component
// fc
// PureComponent
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "app",
      fcTitle: "fc",
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.title === this.state.title) {
  //     return false;
  //   }
  //   return true;
  // }

  handleClick() {
    this.setState({
      title: "aa",
      fcTitle: "function component",
    });
  }

  render() {
    // console.info("render, app");
    return (
      <div onClick={() => this.handleClick()}>
        {this.state.title}
        <CC title={this.state.title} />
        <Fc title={this.state.fcTitle} />
      </div>
    );
  }
}

export default App;
