const initialState = {
  list: [
    {
      title: "Hello darkness, my old friend",
      executed: false,
    },
    {
      title: "I've come to talk to you again",
      executed: true,
    },
    {
      title: "Because a vision softly creeping",
      executed: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST_ITEM":
      return {
        ...state,
        list: state.list.concat({
          title: state.toDoTitle,
          executed: false,
        }),
      };
    case "SET_TODO_TITLE":
      return {
        ...state,
        toDoTitle: action.title,
      };
    case "RESET_TODO_TITLE":
      return {
        ...state,
        toDoTitle: "",
      };
    default:
      return state;
  }
};

export default reducer;
