import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
