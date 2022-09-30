import { SET_ARTICLES, SET_FILTERED_ARTICLES, SET_FILTERED_ARTICLES_DATE, SET_LOADING } from "../reducers/articlesReducer";

export const setLoading = (payload) => ({ type: SET_LOADING, payload });
export const setArticles = (payload) => ({ type: SET_ARTICLES, payload });
export const setFilteredArticles = (payload) => ({ type: SET_FILTERED_ARTICLES, payload });
export const setFilteredArticlesDate = (payload) => ({ type: SET_FILTERED_ARTICLES_DATE, payload });

export const getArticles = (limit, offset) => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		const response = await fetch(`/api/article?limit=${limit}&offset=${offset}`)
			.then((response) => response.json());
		dispatch(setArticles(response));
	} catch (error) {
		console.log('fetch articles error: ', error);
	} finally {
		dispatch(setLoading(false));
	}
};

export const addArticle = (text, title) => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		const response = await fetch(`/api/article`, {
			method: 'POST',
			body: JSON.stringify({ text, title }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		}).then((response) => response.json());
		return response;
	} catch (error) {
		console.log('create article error: ', error);
	} finally {
		dispatch(setLoading(false));
	}
};

export const getArticle = (id) => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		const response = await fetch(`/api/article/${id}`).then((response) => response.json());
		return response;
	} catch (error) {
		console.log('fetch article error: ', error);
	} finally {
		dispatch(setLoading(false));
	}
};

export const getComments = (id) => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		const response = await fetch(`/api/comment?article=${id}`).then((response) => response.json());
		return response;
	} catch (error) {
		console.log('fetch article comments error: ', error);
	} finally {
		dispatch(setLoading(false));
	}
};

export const addComment = (text, article) => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		const response = await fetch(`/api/comment`, {
			method: 'POST',
			body: JSON.stringify({ text, article }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		}).then((response) => response.json());
		return response;
	} catch (error) {
		console.log('create comment error: ', error);
	} finally {
		dispatch(setLoading(false));
	}
};