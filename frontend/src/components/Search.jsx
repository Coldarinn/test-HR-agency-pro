import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";

export const Search = () => {
	const { setFilteredArticles } = useActions();
	const { articles, filteredArticlesDate } = useSelector((state) => state.articles)
	const [searchValue, setSearchValue] = useState('');

	const changeHandler = (val) => {
		setSearchValue(val);

		if (val) {
			if (filteredArticlesDate) {
				const matches = filteredArticlesDate.data.filter(({ title }) => title.toLowerCase().split(/\s+/).join('').includes(val.toLowerCase().split(/\s+/).join('')));
				setFilteredArticles({ data: matches, total: matches.length });
			} else {
				const matches = articles?.data?.filter(({ title }) => title.toLowerCase().split(/\s+/).join('').includes(val.toLowerCase().split(/\s+/).join('')));
				setFilteredArticles({ data: matches, total: matches.length });
			}
		} else {
			setFilteredArticles(null);
		}
	};

	return (
		<form className="articles__search form">
			<div className="form__item">
				<input
					type="text"
					id="search"
					className="form__input"
					required
					placeholder="Введите название"
					value={searchValue}
					onChange={(event) => changeHandler(event.target.value)}
				/>
				<label htmlFor="search" className="form__label">Введите название</label>
			</div>
		</form>
	)
};