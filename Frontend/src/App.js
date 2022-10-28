import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Buses from "./Pages/Buses";
import Profile from "./Pages/Profile";
import Foffers from "./Pages/Foffers";
import ContactUs from "./Pages/ContactUs";

import AboutUs from "./Pages/AboutUs";
import { AuthProvider } from "./Context/auth.context";
import Cookies from "universal-cookie";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Tripy from "./Pages/Tripy";
import BookNow from "./Components/BusesComponent/BookNow/BookNow";
import SignUp from "./Pages/SignUp";


function App() {
	const cookies = new Cookies();
	let tokenData = cookies.get("my_cookie");

	return (
		<div className="App">

			<AuthProvider tokenData={tokenData}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/buses" element={<Buses />} />
						<Route path="/booknow" element={<BookNow />} />
						<Route path="/offers" element={<Foffers />} />
						<Route path="/contact" element={<ContactUs />} />
						<Route path="/signup" element={<SignUp />} />
            			<Route path="/aboutus" element={<AboutUs/>}/>
					 	<Route path="/trip" element={<Tripy/>}/>
						<Route
							path="/users/:user_id"
							element={
								<ProtectedRoute>
									<Profile />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</Router>
				<Footer />
			</AuthProvider>
		</div>
	);
}

export default App;
