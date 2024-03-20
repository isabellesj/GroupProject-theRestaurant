import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDeleteButton from "./AdminDeleteButton";
import { fetchCustomers } from "./AdminCustomer";
import "../scss/admin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import AdminEditComponent from "./AdminEditCoponent";
import { IBookingsPut } from "../models/IBookingsPut";
import { ICustomerPut } from "../models/ICustomerPut";

const AdminComponent: React.FC = () => {
  const [bookings, setBookings] = useState<IBookingsPut[]>([]);
  const [customers, setCustomers] = useState<ICustomerPut[]>([]);
  const [editingBookingId, setEditingBookingId] = useState<string | null>(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get<IBookingsPut[]>(
        "https://school-restaurant-api.azurewebsites.net/booking/restaurant/65c60cd512ebb6ed53265ac4"
      );
      setBookings(response.data);
      const customerIds = response.data.map((booking) => booking.customerId);
      const fetchedCustomers = await fetchCustomers(customerIds);
      setCustomers(fetchedCustomers);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleDeleteBooking = (bookingId: string) => {
    const updatedBookings = bookings.filter(
      (booking) => booking._id !== bookingId
    );
    setBookings(updatedBookings);
  };

  const handleEditClick = (bookingId: string) => {
    if (editingBookingId === bookingId) {
      setEditingBookingId(null);
    } else {
      setEditingBookingId(bookingId);
    }
  };

  const handleCancelEdit = () => {
    setEditingBookingId(null);
  };

  return (
    <div className="AdminShowBookingContainer">
      <h1>Bokningar</h1>
      <ul>
        {bookings.map((booking) => {
          const customer = customers.find((c) => c._id === booking.customerId);
          const isEditing = editingBookingId === booking._id;
          return (
            <li key={booking._id}>
              <div>
                <strong>Boknings ID:</strong> {booking._id}
              </div>
              {customer && (
                <div>
                  <div>
                    <strong>Kundnamn:</strong> {customer.name}{" "}
                    {customer.lastname}
                  </div>
                  <div>
                    <strong>E-post:</strong> {customer.email}
                  </div>
                  <div>
                    <strong>Telefon:</strong> {customer.phone}
                  </div>
                  <div>
                    <strong>Datum:</strong> {booking.date}
                  </div>
                  <div>
                    <strong>Tid:</strong> {booking.time}
                  </div>
                  <div>
                    <strong>Antal Gäster:</strong> {booking.numberOfGuests}
                  </div>
                </div>
              )}
              <AdminDeleteButton
                bookingId={booking._id}
                onDelete={handleDeleteBooking}
              />
              <button onClick={() => handleEditClick(booking._id)}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </button>
              {isEditing && (
                <AdminEditComponent
                  customer={customer}
                  booking={booking}
                  onCancelEdit={handleCancelEdit}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminComponent;
