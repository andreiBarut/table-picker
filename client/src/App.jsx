import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PickTable from "./pages/PickTable";
import Login from "./pages/Login";
import BookingDetails from "./pages/BookingDetails";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/pickTable" element={<PickTable />} />
					<Route path="/bookingDetails" element={<BookingDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
