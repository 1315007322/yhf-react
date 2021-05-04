import React from "react";
// import connect from "./hoc/connect";
import { connect } from "react-redux";
import { ADD, SUB, CHANGE, LOGIN } from "./actions";
import store from "./store";
import fetch from "fetch";
import { globalContext } from "./context/global";
import Storage from "./hoc/storage";

// @Storage
class CC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTitle: "classComponent",
      myName: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.info(props.title);
    return {
      myTitle: props.title,
    };
  }

  componentDidMount() {
    store.dispatch({
      type: CHANGE,
      value: 5,
    });
    // console.info("----cc", store.getState());
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.info("---getSnapshotBeforeUpdate", prevProps, prevState);
    return {
      key: "snapshot",
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.info("---update", prevProps, prevState, snapshot);
  }

  handleAdd() {
    this.props.addNum();
  }

  handleSub() {
    this.props.subNum();
  }

  async handleChange() {
    this.props.changeNum(Math.random() * 10);
    console.info(this.props.login());
    const data = await this.props.login();
    // this.props.login();
  }

  render() {
    console.info("-----render,", this.props);
    const { dataState } = this.props;
    return (
      <div>
        CC {dataState.num} {dataState.username}
        <button onClick={() => this.handleAdd()}>+</button>
        <button onClick={() => this.handleSub()}>-</button>
        <button onClick={() => this.handleChange()}>change</button>
      </div>
    );
  }
}

CC.contextType = globalContext;

// 将redux里的state映射到props中
const mapStateToProps = (state) => {
  return {
    dataState: state,
  };
};

// 将redux里的dispatch映射到props中
const mapDispatchToProps = (dispatch) => {
  return {
    addNum() {
      dispatch({
        type: ADD,
      });
    },

    subNum() {
      dispatch({
        type: SUB,
      });
    },

    changeNum(value) {
      dispatch({
        type: CHANGE,
        value,
      });
    },

    login() {
      return () => {
        fetch("http://localhost:3000/getA")
          .then((res) => {
            console.info("---", res);
            res.json();
          })
          .then((res) => {
            console.info(res);
            let action = {
              type: LOGIN,
              value: res.username,
            };
            dispatch(action);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      // setTimeout((res) => {
      //   dispatch({
      //     type: LOGIN,
      //     value: "yhf",
      //   });
      // }, 3000);
    },
  };
};

// export default Storage(CC);
export default connect(mapStateToProps, mapDispatchToProps)(CC);

// function connect(mapStateToProps, mapDispatchToProps) {
//   return function (WrapComponent) {
//     return class extends React.Component {
//       render() {
//         return <WrapComponent {...mapStateToProps(store.getState())} {...mapDispatchToProps(store.dispatch)} />;
//       }
//     };

// }
