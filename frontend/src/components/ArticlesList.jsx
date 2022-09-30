import { ArticlesListItem } from './ArticlesListItem';
import { useSelector } from "react-redux";
import { useActions } from '../hooks/useActions';
import { useEffect, useState } from 'react';
import { Pagination } from "../components/Pagination";

export const ArticlesList = () => {
	const limit = 2;

	const { articles, filteredArticles, filteredArticlesDate } = useSelector((state) => state.articles);
	const { setArticles, getArticles, setFilteredArticles, setFilteredArticlesDate } = useActions();
	const [page, setPage] = useState(1);

	useEffect(() => {
		getArticles(0, 0);
	}, []);

	const deleteHandler = (id) => {
		const newArticles = { ...articles, data: articles.data.filter((item) => item.id !== id), total: articles.total - 1 };
		if ((newArticles.total <= limit * (page - 1)) && page > 1) setPage(page - 1);
		setArticles(newArticles);

		if (filteredArticles) {
			const newArticles = { ...filteredArticles, data: filteredArticles.data.filter((item) => item.id !== id), total: filteredArticles.total - 1 };
			if ((newArticles.total <= limit * (page - 1)) && page > 1) setPage(page - 1);
			setFilteredArticles(newArticles);
		};

		if (filteredArticlesDate) {
			const newArticles = { ...filteredArticlesDate, data: filteredArticlesDate.data.filter((item) => item.id !== id), total: filteredArticlesDate.total - 1 };
			if ((newArticles.total <= limit * (page - 1)) && page > 1) setPage(page - 1);
			setFilteredArticlesDate(newArticles);
		};
	};

	return (
		<ul className="articles__list">
			{articles?.total > 0 ? (
				<>
					{filteredArticles ? (
						<>
							{filteredArticles.total > 0 ? (
								<>
									{filteredArticles.data.slice(limit * (page - 1), limit * page).map((item) => (
										<ArticlesListItem
											key={item.id}
											id={item.id}
											date={item.date}
											title={item.title}
											deleteHandler={deleteHandler}
										/>
									))}
									{filteredArticles.total > limit && <Pagination page={page} setPage={setPage} limit={limit} length={filteredArticles.total} />}
								</>
							) : (
								<div className="articles__empty">По данному запросу ничего не найдено</div>
							)}
						</>
					) : filteredArticlesDate ? (
						<>
							{filteredArticlesDate.total > 0 ? (
								<>
									{filteredArticlesDate.data.slice(limit * (page - 1), limit * page).map((item) => (
										<ArticlesListItem
											key={item.id}
											id={item.id}
											date={item.date}
											title={item.title}
											deleteHandler={deleteHandler}
										/>
									))}
									{filteredArticlesDate.total > limit && <Pagination page={page} setPage={setPage} limit={limit} length={filteredArticlesDate.total} />}
								</>
							) : (
								<div className="articles__empty">По данному запросу в диапозоне указанных дат ничего не найдено</div>
							)}
						</>
					) : (
						<>
							{articles.data.slice(limit * (page - 1), limit * page).map((item) => (
								<ArticlesListItem
									key={item.id}
									id={item.id}
									date={item.date}
									title={item.title}
									deleteHandler={deleteHandler}
								/>
							))}
							{articles.total > limit && <Pagination page={page} setPage={setPage} limit={limit} length={articles.total} />}
						</>
					)}
				</>
			) : (
				<div className="articles__empty">Статей пока что нет</div>
			)}
		</ul>
	)
}