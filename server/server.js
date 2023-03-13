const express = require("express");
const app = express();

const cors = require("cors");
const mysql = require("mysql");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	user: "root",
	host: "localhost",
	password: "password",
	database: "tablepicker",
});

//*GET REQUEST
app.get("/tables", (req, res) => {
	const restaurant = req.body.restaurant;
	db.query(
		"SELECT * FROM `table` WHERE restaurantID = 2",
		[restaurant],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
});

app.listen(3001, (res, err) => {
	console.log("app listening to port 3001");
});
