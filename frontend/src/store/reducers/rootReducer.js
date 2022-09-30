import { combineReducers } from 'redux';

import articles from "./articlesReducer";

export const rootReducer = combineReducers({
	articles
});
