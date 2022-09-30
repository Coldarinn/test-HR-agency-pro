export const SET_LOADING = 'SET_LOADING';
export const SET_ARTICLES = 'SET_ARTICLES';
export const SET_FILTERED_ARTICLES = 'SET_FILTERED_ARTICLES';
export const SET_FILTERED_ARTICLES_DATE = 'SET_FILTERED_ARTICLES_DATE';

const initialState = {
	articles: null,
	filteredArticles: null,
	filteredArticlesDate: null,
	isLoading: false,
};

export default function articlesReducer(state = initialState, action) {
	if (action.type === SET_LOADING) {
		return {
			...state,
			isLoading: action.payload,
		}
	};
	if (action.type === SET_ARTICLES) {
		return {
			...state,
			articles: action.payload,
		}
	};
	if (action.type === SET_FILTERED_ARTICLES) {
		return {
			...state,
			filteredArticles: action.payload,
		}
	};
	if (action.type === SET_FILTERED_ARTICLES_DATE) {
		return {
			...state,
			filteredArticlesDate: action.payload,
		}
	};
	return state;
};
