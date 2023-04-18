
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";
import UserLoginProvider from "./contexts/UserLoginProvider";
import Dashboard from "./containers/Dashboard/Dashboard";

function App() {
	return (
		<UserLoginProvider>
			<BrowserRouter>
				<div className="App">
					<Routes>
						<Route path={"/"} element={<HomePage />} />
						<Route path={"/dashboard"} element={<Dashboard />} />
					</Routes>
				</div>
			</BrowserRouter>
		</UserLoginProvider>
	);
}

export default App;
