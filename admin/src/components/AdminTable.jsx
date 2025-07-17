import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";

const AdminTable = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const response = await axios.get(backendUrl + "/api/reservations/get");
        setReservations(response.data);
        console.log(response);
      } catch (error) {
        console.log(error, "Error fetching reservation");
      }
    };
    fetchReservation();
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {reservations.length === 0 ? (
            <tr>
              <td colSpan="7">No reservations found</td>
            </tr>
          ) : (
            reservations.map((res, index) => (
              <tr key={index}>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
                <td>{res.date}</td>
                <td>{res.time}</td>
                <td>{res.guests}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
