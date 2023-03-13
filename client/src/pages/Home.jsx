import { Link } from "react-router-dom";
import "./Pages.css";
const Home = () => {
	return (
		<div className="home-container">
			<h1>Home Page</h1>
			<article>
				<section className="home-restaurant-container">
					<h2>Our Restaurants</h2>
					<article className="home-restaurant-link-container">
						<Link to="/pickTable/restaurant1">Restaurant 1</Link>
						<Link to="/pickTable/restaurant2">Restaurant 2</Link>
						<Link to="/pickTable/restaurant3">Restaurant 3</Link>
						<Link to="/pickTable/restaurant4">Restaurant 4</Link>
					</article>
				</section>
			</article>
		</div>
	);
};

export default Home;
