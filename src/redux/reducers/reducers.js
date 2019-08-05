import NEW_QUOTE from "/src/redux/constants/constants.js";
import getRandomQuote from "/src/js/js-modules/getRandomQuote.js";

//defining initial state
export const defaultQuote = getRandomQuote();

//defining reducer functions to allow the Redux store to know how to respond to the action created
export const getNextQuoteReducer = (state = defaultQuote, action) => {
  switch (action.type) {
    case NEW_QUOTE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
