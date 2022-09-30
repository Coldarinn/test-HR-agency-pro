export const Comments = ({ comments, submitHandler, blockRef, blockHeight, setIsActive, isActive, text, setText }) => {
	return (
		<div className="article__comments comments-article">
			{comments?.length > 0 ? (
				<>
					<div className="comments-article__header">
						<div className="comments-article__title">
							Комментарии
						</div>
						<button className="comments-article__button" onClick={() => setIsActive(prev => !prev)}>
							{isActive ? "Скрыть" : "Показать"}
						</button>
					</div>
					<ul
						className="comments-article__list"
						ref={blockRef}
						style={isActive ? { height: blockHeight } : { height: 0, overflow: 'hidden' }}
					>
						{comments.map((item) => (
							<li className="comments-article__item" key={item.id}>
								<div className="comments-article__author">{item.user || 'анонимный пользователь'}</div>
								<div className="comments-article__text">{item.text}</div>
							</li>
						))}
					</ul>
				</>
			) : (
				<div className="comments-article__empty">
					комментарии отсутсвуют
				</div>
			)}
			<form className="comments-article__form form" onSubmit={(event) => submitHandler(event)}>
				<div className="form__item">
					<input
						type="text"
						id="comment"
						placeholder="Напишите комментарий"
						required
						className="form__input"
						value={text}
						onChange={(event) => setText(event.target.value)}
					/>
					<label htmlFor="comment" className="form__label">Напишите комментарий</label>
				</div>

				<button type="submit" className="form__button">добавить комментарий</button>
			</form>
		</div>
	)
}