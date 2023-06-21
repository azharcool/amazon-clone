const initialState = {
  lang: "English",
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LANGUAGE":
      return {
        ...state,
        lang: action.value,
      };
    default:
      return state;
  }
};

export default languageReducer;
