import React from "react";

const Storage = (WrapComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        myName: "",
      };
    }

    componentDidMount() {
      // console.info('-----', localStorage.getItem('myName'));
      this.setState({
        myName: localStorage.getItem("myName"),
      });
    }

    render() {
      return <WrapComponent myName={this.state.myName} />;
    }
  };
};

export default Storage;
