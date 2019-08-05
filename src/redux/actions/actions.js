import NEW_QUOTE from "/src/redux/constants/constants.js";
import getRandomQuote from "/src/js/js-modules/getRandomQuote.js";

//defining action creator. a function that returns an action (object that contains information about an action-event that has occurred)
export const newQuoteActionCreator = () => {
  let quoteObject = getRandomQuote();
  return {
    type: NEW_QUOTE,
    payload: quoteObject
  };
};
