const initialState = {
  list: [
    {
      id: new Date(),
      title: "Hello darkness, my old friend",
      executed: false,
    },
    {
      id: new Date(),
      title: "I've come to talk to you again",
      executed: true,
    },
    {
      id: new Date(),
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
          id: new Date(),
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
    case "REMOVE_ITEM":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.itemId),
      };
    default:
      return state;
  }
};

export default reducer;
