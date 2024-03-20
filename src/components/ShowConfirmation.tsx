import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICustomerPut } from "../models/ICustomerPut";
import { IBookingsPut } from "../models/IBookingsPut";

export const ShowConfirmation = () => {
  const { id } = useParams<{ id: string }>();
  const [booking, setBooking] = useState<IBookingsPut>();
  const [customer, setCustomer] = useState<ICustomerPut>();

  const fetchBooking = async (id: string): Promise<IBookingsPut[]> => {
    try {
      const response = await axios.get<IBookingsPut[]>(
        `https://school-restaurant-api.azurewebsites.net/booking/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching booking:", error);
      // return null;
      throw error;
    }
  };

  const fetchCustomer = async (customerId: string) => {
    try {
      const response = await axios.get<ICustomerPut[]>(
        `https://school-restaurant-api.azurewebsites.net/customer/${customerId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching customer:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const booking = await fetchBooking(id);

        if (booking) {
          setBooking(booking[0]);

          if (booking[0].customerId) {
            const fetchedCustomer = await fetchCustomer(booking[0].customerId);
            setCustomer(fetchedCustomer[0]);
          }
        }
      };

      if (!booking) fetchData();
    }
  });

  return (
    <>
      <div className="confirmation__container">
        <div className="pyro__container">
          <div className="pyro">
            <div className="before"></div>
            <div className="after"></div>
          </div>
        </div>
        <div className="confirmation__wrapper">
          <div className="confirmation__container__info">
            <h3 className="confirmation__title__first">Bokingsbekräftelse</h3>
            <h5 className="confirmation__title__second">Kunduppgifter</h5>
            <section className="section__wrapper">
              <div className="para__wrapper">
                <p>Boknings-ID: {booking?._id}</p>
              </div>
              <div className="para__wrapper">
                <p>Datum: {booking?.date}</p>
              </div>
              <div className="para__wrapper">
                <p>Tid: {booking?.time}</p>
              </div>
              <div className="para__wrapper">
                <p>Antal gäster: {booking?.numberOfGuests}</p>
              </div>
              {customer && (
                <>
                  <div className="para__wrapper">
                    <p>Förnamn: {customer.name}</p>
                  </div>
                  <div className="para__wrapper">
                    <p>Efternamn: {customer.lastname}</p>
                  </div>
                  <div className="para__wrapper">
                    <p>Emailadress: {customer.email}</p>
                  </div>
                  <div className="para__wrapper">
                    <p>Telefonnummer: {customer.phone}</p>
                  </div>
                </>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
