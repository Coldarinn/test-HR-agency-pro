import { formatDate } from "../hooks/formatDate";
import { Link } from "react-router-dom";

export const ArticlesListItem = ({ date, id, title, deleteHandler }) => {

	return (
		<div className="articles__item item-articles">
			<div className="item-articles__content">
				<div className="item-articles__date">
					{formatDate(date)}
				</div>
				<Link className="item-articles__title" to={`articles/${id}`}>
					{title}
				</Link>
			</div>
			<button className="item-articles__button" onClick={() => deleteHandler(id)}>
				удалить
			</button>
		</div>
	)
}