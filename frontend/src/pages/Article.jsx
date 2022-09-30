import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import { Comments } from "../components/Comments";
import { useActions } from "../hooks/useActions";

const Article = () => {
	const [text, setText] = useState('');
	const [article, setArticle] = useState(null);
	const [comments, setComments] = useState(null);
	const { id } = useParams();
	const { getArticle, getComments, addComment } = useActions();

	const [isActive, setIsActive] = useState(true);
	const [blockHeight, setBlockHeight] = useState(0);

	const blockRef = useRef(null);

	useEffect(() => {
		(async function () {
			const response = await getArticle(id);
			setArticle(response);
			const comments = await getComments(id);
			setComments(comments.records);
		})();
	}, []);

	useEffect(() => {
		setIsActive(true);
		if (blockRef.current) blockRef.current.style.height = 'auto';
		const blockHeight = blockRef.current?.getBoundingClientRect().height;
		setBlockHeight(blockHeight);
	}, [comments]);

	const submitHandler = async (event) => {
		event.preventDefault();
		const response = await addComment(text, id);
		const newArr = [...comments];
		newArr.push(response);
		setComments(newArr);
	};

	return (
		<div className="article">
			<div className="container">
				<h1 className="article__title">
					{article?.title}
				</h1>
				<p className="article__text">
					{article?.text}
				</p>
				<Comments
					comments={comments}
					submitHandler={submitHandler}
					blockRef={blockRef}
					blockHeight={blockHeight}
					setIsActive={setIsActive}
					isActive={isActive}
					text={text}
					setText={setText}
				/>
			</div>
		</div>
	)
};

export default Article;