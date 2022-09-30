import { Routes, Route } from "react-router-dom";
import { publicRoutes } from '../router';

export const AppRouter = () => {
	return (
		<Routes>
			{publicRoutes.map((item) => <Route key={item.path} path={item.path} element={item.element} />)}
		</Routes>
	)
}