import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Tours from "./pages/Tours";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import EditBooking from "./pages/EditBooking";
import TourDetails from "./pages/TourDetails";
import Auth from "./pages/Auth";

import "./styles/Navbar.css";
import "./styles/Home.css";

function Layout() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/auth";

  return (
    <>
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit-booking/:id" element={<EditBooking />} />
        <Route path="/tour-details/:id" element={<TourDetails />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.removeItem("user");

      alert("Session Expired. Please login again.");

      window.location.href = "/auth";
    }, 15 * 60 * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;