"use strict";

import { newQuoteActionCreator } from "./src/redux/actions";
import { getNextQuoteReducer } from "./src/redux/reducers";
import { getTwitterUrl } from "./src/js/js-modules/getTwitterUrl.js";

const Redux = window.Redux;

//creating the Redux store
const store = Redux.createStore(
  getNextQuoteReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//defining UI elements
const newQuoteButton = document.getElementById("new-quote");
const quoteTextContent = document.getElementById("text");
const quoteAuthorContent = document.getElementById("author");
const tweetButton = document.getElementById("tweet-quote");

//creating store listener function that is called whenever an action is dispatched to the store. The getState() method retrieves the current state held in the Redux store
store.subscribe(() => {
  const state = store.getState();
  //inject random quote on HTML
  quoteTextContent.innerHTML = state.data.quoteText;
  //inject author on HTML
  quoteAuthorContent.innerHTML = "- " + state.data.quoteAuthor;
  getTwitterUrl(state.data);
});

//creating UI listeners. Dispatching actions (via the action creators that return a "type" to the reducer) to the redux store. When a new state is set in the Redux store, the store listeners will be retrienving the current state held in the Redux store
newQuoteButton.addEventListener("click", () => {
  store.dispatch(newQuoteActionCreator());
});

//getting initial state, a reset state as the DOM is loaded.
document.addEventListener("DOMContentLoaded", () => {
  const state = store.getState();
  quoteTextContent.innerHTML = state.quoteText;
  quoteAuthorContent.innerHTML = "- " + state.quoteAuthor;
  getTwitterUrl(state);
});
