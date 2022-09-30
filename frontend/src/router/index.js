import Articles from "../pages/Articles";
import Article from "../pages/Article";


export const routes = {
	ARTICLES: {
		path: '/',
		element: <Articles />
	},
	ARTICLE: {
		path: 'articles/:id',
		element: <Article />
	},
};

export const publicRoutes = [
	{
		path: routes.ARTICLES.path,
		element: routes.ARTICLES.element
	},
	{
		path: routes.ARTICLE.path,
		element: routes.ARTICLE.element
	},
	{
		path: '*',
		element: routes.ARTICLES.element
	}
];