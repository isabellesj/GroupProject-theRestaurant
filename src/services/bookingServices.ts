import axios from "axios";
import { IBookings } from "../models/IBookings";

export const fetchBookings = async () => {
  const response = await axios.get<IBookings[]>(
    "https://school-restaurant-api.azurewebsites.net/booking/restaurant/65c60cd512ebb6ed53265ac4"
  );
  return response.data;
};

export const createBooking = async (
  formattedDate: string,
  selectedTime: string,
  numberOfGuests: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
) => {
  const response = await axios.post("https://school-restaurant-api.azurewebsites.net/booking/create", {
    restaurantId: "65c60cd512ebb6ed53265ac4",
    date: formattedDate,
    time: selectedTime,
    numberOfGuests: numberOfGuests,
    customer: {
      name: firstName,
      lastname: lastName,
      email: email,
      phone: phone,
    },
  });

  console.log("respons logg", response.data);
  return response.data.insertedId;
};

export const createCustomerId = (
  firstName: string,
  lastName: string,
  email: string,
  phone: string
) =>
  axios.post(
    "https://school-restaurant-api.azurewebsites.net/customer/create",
    {
      name: firstName,
      lastname: lastName,
      email: email,
      phone: phone,
    }
  );
