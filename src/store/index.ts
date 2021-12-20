import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, AnyAction, applyMiddleware } from 'redux';

import { getArticles } from '../api/api';
import { Article } from '../dataTypes';

const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
const FETCH_ARTICLES_FAILED = 'FETCH_ARTICLES_FAILED';

export const articlesData = (state: RootState) => state.articles;

export const fetchArticles = () => {
  return (dispatch: any) => {
    dispatch({ type: FETCH_ARTICLES_REQUEST });
    getArticles()
      .then(response => dispatch({ type: FETCH_ARTICLES_SUCCESS, data: response }))
      .catch(() => dispatch({ type: FETCH_ARTICLES_FAILED }));
  };
};

export type RootState = {
  articles: Article[] | [];
};

const initialState: RootState = {
  articles: [],
};

const rootReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return {
        ...state,
      };

    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.data,
      };

    case FETCH_ARTICLES_FAILED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
