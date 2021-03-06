import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllArticles from "./Components/AllArticles";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Article from "./Components/Article";
import Users from "./Components/Users";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Nav />
				<Routes>
					<Route path="/" element={<AllArticles />} />
					<Route path="/articles" element={<AllArticles />} />
					<Route path="/articles/:article_id" element={<Article />} />
					<Route path="/users/" element={<Users />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
