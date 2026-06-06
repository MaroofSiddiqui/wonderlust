import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Admin() {
  const navigate = useNavigate();

  const [users, setUsers] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [tours, setTours] = useState<any[]>([]);

  const [tourData, setTourData] = useState({
    title: "",
    location: "",
    image: "",
    price: "",
  });

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user") || "null"
    );

    if (!user || user.role !== "ADMIN") {
      alert("Access Denied");
      navigate("/");
      return;
    }

    fetchUsers();
    fetchBookings();
    fetchTours();
  }, [navigate]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/bookings"
      );

      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTours = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/tours"
      );

      setTours(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTour = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/tours",
        {
          title: tourData.title,
          location: tourData.location,
          image: tourData.image,
          price: Number(tourData.price),
        }
      );

      alert("Tour Added Successfully");

      setTourData({
        title: "",
        location: "",
        image: "",
        price: "",
      });

      fetchTours();
    } catch (error) {
      console.log(error);
      alert("Failed To Add Tour");
    }
  };

  const deleteTour = async (id: number) => {
    if (!window.confirm("Delete this tour?"))
      return;

    try {
      await axios.delete(
        `http://localhost:8080/api/tours/${id}`
      );

      alert("Tour Deleted");

      fetchTours();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <h1>Admin Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Users</h3>
          <h1>{users.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Total Bookings</h3>
          <h1>{bookings.length}</h1>
        </div>

        <div style={cardStyle}>
          <h3>Total Tours</h3>
          <h1>{tours.length}</h1>
        </div>
      </div>

      <h2>Add New Tour</h2>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <input
          placeholder="Title"
          value={tourData.title}
          onChange={(e) =>
            setTourData({
              ...tourData,
              title: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          placeholder="Location"
          value={tourData.location}
          onChange={(e) =>
            setTourData({
              ...tourData,
              location: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          placeholder="Image URL"
          value={tourData.image}
          onChange={(e) =>
            setTourData({
              ...tourData,
              image: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          placeholder="Price"
          value={tourData.price}
          onChange={(e) =>
            setTourData({
              ...tourData,
              price: e.target.value,
            })
          }
          style={inputStyle}
        />

        <button
          onClick={addTour}
          style={buttonStyle}
        >
          Add Tour
        </button>
      </div>

      <h2>Tours</h2>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Location</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>

        <tbody>
          {tours.map((tour) => (
            <tr key={tour.id}>
              <td style={tdStyle}>{tour.id}</td>
              <td style={tdStyle}>{tour.title}</td>
              <td style={tdStyle}>{tour.location}</td>
              <td style={tdStyle}>₹{tour.price}</td>
              <td style={tdStyle}>
                <button
                  onClick={() =>
                    deleteTour(tour.id)
                  }
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Keep your existing Users and Bookings tables below this section */}
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "250px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
};

const buttonStyle = {
  background: "#00b4ff",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  background: "white",
  borderCollapse: "collapse" as const,
};

const thStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  background: "#00b4ff",
  color: "white",
};

const tdStyle = {
  border: "1px solid #ddd",
  padding: "10px",
};

export default Admin;