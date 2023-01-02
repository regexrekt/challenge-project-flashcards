import { configureStore } from "@reduxjs/toolkit";
import {default as topicsReducers} from '../features/topics/topicsSlice.js';
import {default as quizzesReducers} from '../features/quizzes/quizzesSlice';
import {default as cardsReducers} from '../features/cards/cardsSlice';

export default configureStore({
  reducer: {
    topics: topicsReducers,
    quizzes: quizzesReducers,
    cards: cardsReducers
  },
});
