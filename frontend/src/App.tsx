import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Tours from "./pages/Tours";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import EditBooking from "./pages/EditBooking";
import { useEffect } from "react";
import TourDetails from "./pages/TourDetails";

import "./styles/Navbar.css";
import "./styles/Home.css";

function App() {

  useEffect(() => {

    const timeout = setTimeout(() => {

      localStorage.removeItem("user");

      alert(
        "Session Expired. Please login again."
      );

      window.location.href = "/login";

    }, 15 * 60 * 1000);

    return () => clearTimeout(timeout);

  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit-booking/:id" element={<EditBooking />} />
        <Route path="/tour-details/:id" element={<TourDetails />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;