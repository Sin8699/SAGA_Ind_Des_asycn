export var reducer = (state = 0, action) => {
    console.log("REDUCER");
    console.log(action.type);
  switch (action.type) {
    case "INCREMENT":
        return state+1;
    case "INCREMENT_ASYNC":
        return state+1;
    case "DECREMENT":
      return state-1;
    default:
      return state;
  }
};
