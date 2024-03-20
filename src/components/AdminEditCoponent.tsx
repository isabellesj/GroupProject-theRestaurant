import React, { useState, useEffect } from "react";
import axios from "axios";
import { IBookingsPut } from "../models/IBookingsPut";
import { ICustomerPut } from "../models/ICustomerPut";

interface Props {
  booking?: IBookingsPut;
  customer?: ICustomerPut;
  onCancelEdit: () => void;
}

const convertId = (obj: any) => {
  if ("_id" in obj) {
    return { ...obj, id: obj._id, _id: undefined };
  }
  return obj;
};

const AdminEditComponent: React.FC<Props> = ({
  booking,
  customer,
  onCancelEdit,
}) => {
  const [editedBooking, setEditedBooking] = useState<IBookingsPut | undefined>(
    booking ? convertId(booking) : undefined
  );
  const [editedCustomer, setEditedCustomer] = useState<
    ICustomerPut | undefined
  >(customer ? convertId(customer) : undefined);

  useEffect(() => {
    if (booking) {
      setEditedBooking(convertId(booking));
    }
    if (customer) {
      setEditedCustomer(convertId(customer));
    }
  }, [booking, customer]);

  const handleBookingInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log("Booking input changed:", name, value);
    setEditedBooking((prevState) => ({
      ...prevState!,
      [name]: value,
    }));
  };

  const handleCustomerInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log("Customer input changed:", name, value);
    setEditedCustomer((prevState) => ({
      ...prevState!,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Form submitted");
      if (editedBooking && editedCustomer) {
        console.log("Booking ID:", editedBooking.id);
        console.log("Customer ID:", editedCustomer.id);
        await axios.put(
          `https://school-restaurant-api.azurewebsites.net/booking/update/${editedBooking.id}`,
          editedBooking
        );
        await axios.put(
          `https://school-restaurant-api.azurewebsites.net/customer/update/${editedCustomer.id}`,
          editedCustomer
        );
        onCancelEdit();
      }
    } catch (error) {
      console.error("Error updating booking or customer:", error);
    }
  };

  return (
    <div className="editForm">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={editedCustomer?.name || ""}
          onChange={handleCustomerInputChange}
        />
        <input
          type="text"
          name="lastname"
          value={editedCustomer?.lastname || ""}
          onChange={handleCustomerInputChange}
        />
        <input
          type="email"
          name="email"
          value={editedCustomer?.email || ""}
          onChange={handleCustomerInputChange}
        />
        <input
          type="tel"
          name="phone"
          value={editedCustomer?.phone || ""}
          onChange={handleCustomerInputChange}
        />
        <input
          type="date"
          name="date"
          value={editedBooking?.date || ""}
          onChange={handleBookingInputChange}
        />
        <input
          type="time"
          name="time"
          value={editedBooking?.time || ""}
          onChange={handleBookingInputChange}
        />
        <input
          type="number"
          name="numberOfGuests"
          value={editedBooking?.numberOfGuests || ""}
          onChange={handleBookingInputChange}
        />
        <button type="submit">Spara</button>
        <button type="button" onClick={onCancelEdit}>
          Avbryt
        </button>
      </form>
    </div>
  );
};

export default AdminEditComponent;
