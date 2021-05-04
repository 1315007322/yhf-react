import { ADD, SUB, CHANGE, LOGIN } from "../actions";

const defaultValue = {
  num: 1,
  username: "lalala",
};

const reducer = (state = defaultValue, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD:
      newState.num = newState.num + 1;
      return newState;
    case SUB:
      newState.num = newState.num - 1;
      return newState;
    case CHANGE:
      newState.num = action.value;
      return newState;
    case LOGIN:
      newState.username = action.value;
      return newState;
    default:
      return state;
  }
};

export default reducer;
