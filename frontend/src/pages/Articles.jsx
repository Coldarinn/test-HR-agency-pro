import { ArticlesList } from "../components/ArticlesList";
import { AddArticleForm } from "../components/AddArticleForm";
import { Search } from "../components/Search";
import { DatesFilter } from "../components/DatesFilter";

const Articles = () => {

	return (
		<div className="articles">
			<div className="container">
				<AddArticleForm />
				<DatesFilter />
				<Search />
				<ArticlesList />
			</div>
		</div>
	)
};

export default Articles;