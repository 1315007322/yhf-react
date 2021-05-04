import store from "../store";
import React from "react";
import { ADD, SUB, CHANGE } from "../actions";

function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrapComponent) {
    return class extends React.Component {
      render() {
        return (
          <WrapComponent
            {...mapStateToProps(store.getState().num)}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    };
  };
}

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
