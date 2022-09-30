import { useState } from "react";
import { useSelector } from "react-redux";
import { formDateRange } from "../hooks/formatDate";
import { useActions } from "../hooks/useActions";


export const DatesFilter = () => {
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const { articles, filteredArticles } = useSelector((state) => state.articles);
	const { setFilteredArticles, setFilteredArticlesDate } = useActions();

	const submitHandler = (event) => {
		event.preventDefault();

		const newArr = articles.data.filter((article) => new Date(article.date).getTime() >= new Date(startDate).getTime()
			&& new Date(article.date).getTime() <= new Date(endDate).getTime());

		setFilteredArticlesDate({ data: newArr, total: newArr.length });

		if (filteredArticles) {
			const newArr = filteredArticles.data.filter((article) => new Date(article.date).getTime() >= new Date(startDate).getTime()
				&& new Date(article.date).getTime() <= new Date(endDate).getTime());

			setFilteredArticles({ data: newArr, total: newArr.length });
		}
	};

	return (
		<form className="articles__filter form" onSubmit={(event) => submitHandler(event)}>
			<div className="form__item">
				<input
					type="date"
					required
					max={formDateRange(new Date())}
					className="form__input"
					value={startDate}
					onChange={(event) => setStartDate(event.target.value)}
					id="start"
				/>
				<label htmlFor="start" className="form__label">Дата начала</label>
			</div>
			<div className="form__item">
				<input
					type="date"
					required
					max={formDateRange(new Date())}
					min={startDate}
					className="form__input"
					value={endDate}
					onChange={(event) => setEndDate(event.target.value)}
					id="end"
				/>
				<label htmlFor="end" className="form__label">Дата конца</label>
			</div>
			<button type="submit" className="form__button">отфильтровать</button>
		</form>
	)
}