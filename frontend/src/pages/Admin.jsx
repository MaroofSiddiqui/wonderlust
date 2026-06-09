import { useNavigate } from "react-router-dom";
import API from "../api";
import { useEffect, useState } from "react";

function Admin() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [tours, setTours] = useState([]);

  const [tourData, setTourData] = useState({
    title: "",
    location: "",
    image: "",
    images: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user") || "null"
    );

    if (
      !user ||
      (
        user.role !== "ADMIN" &&
        user.role !== "MANAGER"
      )
    ) {
      alert("Access Denied");
      navigate("/");
      return;
    }

    fetchUsers();
    fetchBookings();
    fetchTours();
  }, [navigate]);

  const [editingId, setEditingId] =
    useState(null);

  const fetchUsers = async () => {
    try {
      const response = await API.get(
        "/api/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await API.get(
        "/api/bookings"
      );

      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTours = async () => {
    try {
      const response = await API.get(
        "/api/tours"
      );

      setTours(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTour = async () => {
    try {
      await API.post(
        "/api/tours",
        {
          title: tourData.title,
          location: tourData.location,
          image: tourData.image,

          images: tourData.images
            .split(",")
            .map((img) => img.trim()),

          price: Number(tourData.price),
          description: tourData.description
        }
      );

      alert("Tour Added Successfully");

      setTourData({
        title: "",
        location: "",
        image: "",
        images: "",
        price: "",
        description: "",

      });

      fetchTours();
    } catch (error) {
      console.log(error);
      alert("Failed To Add Tour");
    }
  };

  const deleteTour = async (id) => {
    if (!window.confirm("Delete this tour?"))
      return;

    try {
      await API.delete(
        `/api/tours/${id}`
      );

      alert("Tour Deleted");

      fetchTours();
    } catch (error) {
      console.log(error);
    }
  };

  const editTour = (tour) => {

    setTourData({
      title: tour.title,
      location: tour.location,
      image: tour.image,

      images: tour.images
        ? tour.images.join(", ")
        : "",

      price: tour.price,
      description: tour.description,
    });

    setEditingId(tour.id);
  };

  const updateTour = async () => {

    try {

      await API.put(
        `/api/tours/${editingId}`,
        {
          title: tourData.title,
          location: tourData.location,
          image: tourData.image,
          images: tourData.images
            .split(",")
            .map((img) => img.trim()),
          price: Number(tourData.price),
          description: tourData.description,
        }
      );

      alert("Tour Updated");

      setEditingId(null);

      setTourData({
        title: "",
        location: "",
        image: "",
        images: "",
        price: "",
        description: "",
      });

      fetchTours();

    } catch (error) {

      console.log(error);

      alert("Update Failed");
    }
  };

  const makeManager = async (
    id
  ) => {

    try {

      await API.put(
        `/api/users/make-manager/${id}`
      );

      alert(
        "Manager Created Successfully"
      );

      fetchUsers();

    } catch (error) {

      console.log(error);
    }
  };

  const removeManager = async (
    id
  ) => {

    try {

      await API.put(
        `/api/users/remove-manager/${id}`
      );

      alert(
        "Manager Removed Successfully"
      );

      fetchUsers();

    } catch (error) {

      console.log(error);
    }
  };

  const updateStatus = async (
    id,
    status
  ) => {

    try {

      await API.put(
        `/api/bookings/${id}/status?status=${status}`
      );

      fetchBookings();

    } catch (error) {

      console.log(error);

      alert("Failed to update status");

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

        <textarea
          placeholder="Gallery Image URLs (comma separated)"
          value={tourData.images}
          onChange={(e) =>
            setTourData({
              ...tourData,
              images: e.target.value,
            })
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            minHeight: "100px",
          }}
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

        <textarea
          placeholder="Description"
          value={tourData.description}
          onChange={(e) =>
            setTourData({
              ...tourData,
              description: e.target.value,
            })
          }
        />

        <button
          onClick={
            editingId
              ? updateTour
              : addTour
          }
          style={buttonStyle}
        >
          {editingId
            ? "Update Tour"
            : "Add Tour"}
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
                  onClick={() => editTour(tour)}
                  style={{
                    background: "orange",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  Edit
                </button>

                {loggedInUser.role === "ADMIN" && (

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

                )}

              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {loggedInUser.role === "ADMIN" && (
        <>
          <h2
            style={{
              marginTop: "40px",
            }}
          >
            Users
          </h2>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Role</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td style={tdStyle}>
                    {user.id}
                  </td>

                  <td style={tdStyle}>
                    {user.fullName}
                  </td>

                  <td style={tdStyle}>
                    {user.email}
                  </td>

                  <td style={tdStyle}>
                    {user.role}
                  </td>
                  <td style={tdStyle}>

                    {user.role === "USER" && (

                      <button
                        onClick={() =>
                          makeManager(user.id)
                        }
                        style={{
                          background: "green",
                          color: "white",
                          border: "none",
                          padding: "6px 10px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Make Manager
                      </button>

                    )}

                    {user.role === "MANAGER" && (

                      <button
                        onClick={() =>
                          removeManager(user.id)
                        }
                        style={{
                          background: "orange",
                          color: "white",
                          border: "none",
                          padding: "6px 10px",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        Remove Manager
                      </button>

                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <h2
        style={{
          marginTop: "40px",
        }}
      >
        Bookings
      </h2>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Travel Date</th>
            <th style={thStyle}>Travelers</th>
            <th style={thStyle}>Payment</th>
            <th style={thStyle}>Transaction</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td style={tdStyle}>
                {booking.id}
              </td>

              <td style={tdStyle}>
                {booking.fullName}
              </td>

              <td style={tdStyle}>
                {booking.email}
              </td>

              <td style={tdStyle}>
                {booking.phone}
              </td>

              <td style={tdStyle}>
                {booking.travelDate}
              </td>

              <td style={tdStyle}>
                {booking.travelers}
              </td>
              <td>{booking.paymentStatus}</td>
              <td>{booking.transactionId}</td>
              <td style={tdStyle}>
                <select
                  value={booking.status || "PENDING"}
                  onChange={(e) =>
                    updateStatus(
                      booking.id,
                      e.target.value
                    )
                  }
                  style={{
                    padding: "8px",
                    borderRadius: "6px",
                  }}
                >

                  <option value="PENDING">
                    Pending
                  </option>

                  <option value="CONFIRMED">
                    Confirmed
                  </option>

                  <option value="CANCELLED">
                    Cancelled
                  </option>

                </select>

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
  borderCollapse: "collapse",
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