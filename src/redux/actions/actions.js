import { NEW_QUOTE } from "../constants/constants.js";
import getRandomQuote from "../../js/js-modules/getRandomQuote.js";

//defining action creator. a function that returns an action (object that contains information about an action-event that has occurred). The action creator gets called by `dispatch()`
const newQuoteActionCreator = () => {
  let quoteObject = getRandomQuote();
  return {
    type: NEW_QUOTE,
    payload: quoteObject
  };
};

export default newQuoteActionCreator;
