import GenerateImage from "./GenerateImage";
import SharedCard from "./SharedCard";
import Home from "./Home";
import Cards from "./Cards";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/new" component={GenerateImage} />
				<Route exact path="/cards" component={Cards} />
				<Route
					path="/card/:id"
					render={(routeProps) => <SharedCard {...routeProps} />}
				/>
			</Switch>
		</div>
	);
}

export default App;
