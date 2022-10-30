import SearchForm from "../Components/SearchForm/SearchForm";
import BusPage from "../Components/BusesComponent/BusPage/BusPage";
import { useLocation } from "react-router-dom";

const Buses = () => {
	const location = useLocation();

	const routes = location.state.searchedData;

	return (
		<section className="buses-section">
			<SearchForm routes={routes} />
			<BusPage routes={routes} />
		</section>
	);
};

export default Buses;
