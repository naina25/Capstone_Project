import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Buses from "./Pages/Buses";
import Profile from "./Pages/Profile";
import BookNow from "./Components/BusesComponent/BookNow/BookNow";
import Foffers from "./Pages/Foffers";
import ContactUs from "./Pages/ContactUs";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/buses" element={<Buses />} />
                    <Route path="/users/:user_id" element={<Profile />} />
                    <Route path="/booknow" element={<BookNow />} />
                    <Route path="/offers" element={<Foffers />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
