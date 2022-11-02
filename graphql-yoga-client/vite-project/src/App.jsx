import "./App.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="container p-4">
				<Routes>
					<Route path="/" element={<MessageList />} />
					<Route path="/create-message" element={<MessageForm />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
