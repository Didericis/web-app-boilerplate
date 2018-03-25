import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import configReducer from 'dux/config';

const initialState = window.__PRELOADED_STATE__ || {};
delete window.__PRELOADED_STATE__;

export const middleware = [thunkMiddleware];

export const reducer = combineReducers({
  form: formReducer,
  config: configReducer,
});

export const store = (initial = {}) => (
  createStore(
    reducer, 
    { ...initialState, ...initial }, 
    composeWithDevTools(applyMiddleware(...middleware))
  )
);
