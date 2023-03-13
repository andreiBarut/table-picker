import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PickTable = () => {
	const restaurant = useParams();
	const [tables, setTables] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/tables")
			.then((response) => {
				console.log(response);
				setTables(response.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h1>Pick A Table</h1>
			<h2>{Object.values(restaurant)}</h2>
			<div>
				{tables.map((item) => (
					<div className="pickTable-table-container">
						<p>Restaurant ID : {item.restaurantID}</p>
						<p>Table Name/Nr: {item.tableNumber}</p>
						<p>Table Seat Number: {item.tableSeatNumber}</p>
						<p>Status: {item.tableBookingStatus == 0 ? "available" : "booked"}</p>
						<button>Book</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default PickTable;
