import axios from "axios";
import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

function EditBooking() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [booking,
    setBooking] = useState({
      travelDate: "",
      travelers: 1,
    });

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {

    const user = JSON.parse(
      localStorage.getItem("user") || "null"
    );

    const response =
      await axios.get(
        `http://localhost:8080/api/bookings/email/${user.email}`
      );

    const selectedBooking =
      response.data.find(
        (b) =>
          b.id === Number(id)
      );

    if (selectedBooking) {

      setBooking({
        travelDate:
          selectedBooking.travelDate,
        travelers:
          selectedBooking.travelers,
      });
    }
  };

  const updateBooking = async () => {

    try {

      await axios.put(
        `http://localhost:8080/api/bookings/${id}`,
        booking
      );

      alert(
        "Booking Updated Successfully"
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        "Update Failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px",
        background: "#f5f5f5",
      }}
    >
      <h1>Edit Booking</h1>

      <input
        type="date"
        value={booking.travelDate}
        onChange={(e) =>
          setBooking({
            ...booking,
            travelDate:
              e.target.value,
          })
        }
        style={inputStyle}
      />

      <input
        type="number"
        value={booking.travelers}
        onChange={(e) =>
          setBooking({
            ...booking,
            travelers:
              Number(
                e.target.value
              ),
          })
        }
        style={inputStyle}
      />

      <button
        onClick={updateBooking}
        style={buttonStyle}
      >
        Update Booking
      </button>
    </div>
  );
}

const inputStyle = {
  width: "300px",
  padding: "12px",
  marginBottom: "15px",
  display: "block",
};

const buttonStyle = {
  background: "#00b4ff",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default EditBooking;