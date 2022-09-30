import { ReactComponent as Arrow } from "../assets/img/arrow.svg";

export const Pagination = ({ page, setPage, length, limit }) => {
	const paginationLength = Math.ceil(length / limit);
	return (
		<div className="pagination">
			<div className="pagination__body">
				{page > 1 && (
					<button onClick={() => setPage(page === 1 ? 1 : page - 1)} className="pagination__item prev">
						<Arrow />
					</button>
				)}
				{page > 2 && (
					<>
						<button
							id={1}
							onClick={() => setPage(1)}
							className="pagination__item"
							title="кнопка постраничной пагинации"
						>
							1
						</button>
						<button className="pagination__item dots">...</button>
					</>
				)}

				{page > 1 && (
					<button id={page - 1} onClick={() => setPage(page - 1)} className="pagination__item">
						{page - 1}
					</button>
				)}

				<button id={page} onClick={() => setPage(page)} className="pagination__item active">
					{page}
				</button>

				{page < paginationLength && (
					<button id={page + 1} onClick={() => setPage(page + 1)} className="pagination__item p13">
						{page + 1}
					</button>
				)}
				{page < paginationLength - 1 && <button className="pagination__item dots">...</button>}
				{page < paginationLength - 1 && (
					<button
						id={paginationLength}
						onClick={() => setPage(paginationLength)}
						className="pagination__item p13"
						title="кнопка постраничной пагинации"
					>
						{paginationLength}
					</button>
				)}
				{page < paginationLength && (
					<button
						onClick={() => setPage(page === length ? length : page + 1)}
						className="pagination__item next"
					>
						<Arrow />
					</button>
				)}
			</div>
			<div className="pagination__count">
				Показано {page * limit > length ? length : page * limit} из {length}
			</div>
		</div>
	)
}