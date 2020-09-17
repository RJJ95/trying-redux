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
        list: [
          {
            title: action.title,
            executed: false,
          },
        ],
      };
  }
  return state;
};

export default reducer;
