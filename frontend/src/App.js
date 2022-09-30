import { useSelector } from "react-redux";
import { Loader } from "./components/Loader";
import { AppRouter } from "./components/AppRouter";

function App() {
	const { isLoading } = useSelector((state) => state.articles);

	return (
		<div className="app">
			{isLoading && <Loader />}
			<AppRouter />
		</div>
	)
}

export default App
