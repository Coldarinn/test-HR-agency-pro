import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { useState } from "react";

export const AddArticleForm = () => {
	const { articles } = useSelector((state) => state.articles);
	const { setArticles, addArticle } = useActions();

	const [title, setTitle] = useState('');
	const [text, setText] = useState('');

	const submithandler = async (event) => {
		event.preventDefault();
		const response = await addArticle(title, text);

		const newArray = articles.data.concat();
		newArray.unshift(response);

		const newArticles = { ...articles, data: newArray, total: articles.total + 1 };
		setArticles(newArticles);
	};

	return (
		<form className="articles__form form" onSubmit={(event) => submithandler(event)}>
			<div className="form__item">
				<input
					type="text"
					id="title"
					className="form__input"
					required
					placeholder="title"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<label htmlFor="title" className="form__label">Заголовок</label>
			</div>
			<div className="form__item">
				<input
					type="text"
					id="text"
					className="form__input"
					required
					placeholder="text"
					value={text}
					onChange={(event) => setText(event.target.value)}
				/>
				<label htmlFor="text" className="form__label">Текст</label>
			</div>
			<button className="form__button" type="submit">добавить</button>
		</form>
	)
}