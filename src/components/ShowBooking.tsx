import { ChangeEvent, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IBookings } from "../models/IBookings";
import {
  createBooking,
  createCustomerId,
  fetchBookings,
} from "../services/bookingServices";
import { useNavigate } from "react-router-dom";

export const ShowBooking = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [availableTablesAt18, setAvailableTablesAt18] = useState(0);
  const [availableTablesAt21, setAvailableTablesAt21] = useState(0);

  const navigate = useNavigate();

  const calculateAvailableTables = (bookings: IBookings[], date: Date) => {
    const bookingsForDate = bookings.filter(
      (booking) => booking.date === date?.toLocaleDateString("sv-SE")
    );
    let bookedTablesAt18 = 0;
    let bookedTablesAt21 = 0;

    for (let i = 0; i < bookingsForDate.length; i++) {
      const booking = bookingsForDate[i];
      if (booking.time === "18:00") {
        bookedTablesAt18 += Math.ceil(booking.numberOfGuests / 6);
      } else if (booking.time === "21:00") {
        bookedTablesAt21 += Math.ceil(booking.numberOfGuests / 6);
      }
    }

    setAvailableTablesAt18(15 - bookedTablesAt18);
    setAvailableTablesAt21(15 - bookedTablesAt21);
  };

  async function onChange(nextValue: any) {
    setDate(nextValue);
    const bookings = await fetchBookings();
    calculateAvailableTables(bookings, nextValue);
  }

  const formattedDate = () => {
    if (date) {
      return date.toLocaleDateString("sv-SE").split(" ")[0];
    } else return "";
  };

  const guests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const handleNumberOfGuests = (guest: number) => {
    setNumberOfGuests(guest.toString());
  };

  const handleShowCalendar = (guest: number) => {
    setShowCalendar(true);
    handleNumberOfGuests(guest);
  };

  const { firstName, lastName, email, phone } = formData;
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTimeChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(e.target.value);
  };

  const handleBooking = async () => {
    createCustomerId(firstName, lastName, email, phone);

    const bookingId = await createBooking(
      formattedDate(),
      selectedTime,
      numberOfGuests,
      firstName,
      lastName,
      email,
      phone
    );
    navigate(`/pages/confirmation/${bookingId}`);
  };

  return (
    <div className="booking">
      <h2 className="booking__title-bookTable">Boka bord</h2>
      <h5 className="booking__chooseGuests">Välj antal platser</h5>
      <article className="booking__guests">
        {guests.map((guest, i) => (
          <button
            className="booking__guest"
            key={i}
            onClick={() => handleShowCalendar(guest)}
          >
            {guest}
          </button>
        ))}
      </article>
      {showCalendar && (
        <Calendar
          className="booking__calendar"
          onChange={(nextValue) => onChange(nextValue)}
          value={date}
          showWeekNumbers
        />
      )}
      {date && (
        <div className="booking__time__wrapper">
          {availableTablesAt18 > Math.ceil(parseInt(numberOfGuests) / 6) && (
            <div>
              <input
                className="booking__time"
                type="radio"
                id="time1"
                name="time"
                value="18:00"
                onChange={handleTimeChange}
              />
              <label htmlFor="time1">18:00</label>
            </div>
          )}
          {availableTablesAt21 > Math.ceil(parseInt(numberOfGuests) / 6) && (
            <div>
              <input
                className="booking__time"
                type="radio"
                id="time2"
                name="time"
                value="21:00"
                onChange={handleTimeChange}
              />
              <label htmlFor="time2">21:00</label>
            </div>
          )}
        </div>
      )}
      {selectedTime && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="booking__form"
        >
          <h5 className="booking__form__title">Kunduppgifter</h5>
          <section className="booking__form__wrapper">
            <div className="booking__input__wrapper">
              <p>Förnamn:</p>
              <input
                className="booking__input"
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                placeholder="Ex. Lisa"
                required
              ></input>
            </div>
            <div className="booking__input__wrapper">
              <p>Efternamn:</p>
              <input
                className="booking__input"
                type="text"
                value={lastName}
                onChange={handleInputChange}
                name="lastName"
                placeholder="Ex. Olsson"
                required
              ></input>
            </div>
            <div className="booking__input__wrapper">
              <p>Emailadress:</p>
              <input
                className="booking__input"
                type="email"
                onChange={handleInputChange}
                value={email}
                name="email"
                placeholder="Ex. lisa@hotmail.com"
                required
              ></input>
            </div>
            <div className="booking__input__wrapper">
              <p>Telefonnummer:</p>
              <input
                className="booking__input"
                type="number"
                onChange={handleInputChange}
                value={phone}
                name="phone"
                placeholder="Ex. 0761122345"
                required
              ></input>
            </div>
          </section>
        </form>
      )}
      {firstName && lastName && email && phone && (
        <section className="booking__checkInfo">
          <h5>Kontrollera uppgifterna nedan</h5>
          <p>Förnamn: {firstName}</p>
          <p>Efternamn: {lastName}</p>
          <p>Emailadress: {email}</p>
          <p>Telefonnummer: {phone}</p>
          <p>Datum: {formattedDate()}</p>
          <p>Tid: {selectedTime}</p>
          <p>Antal gäster: {numberOfGuests}</p>
          <p className="booking__gdpr">
            Vi på Trattoria Bella Vita värnar om din integritet och är
            dedikerade till att skydda dina personuppgifter. Genom att trycka på
            Boka godkänner du att vi samlar in viss information för att
            förbättra din upplevelse och erbjuda dig bästa möjliga service. Det
            kan inkludera uppgifter som namn, e-postadress, telefonnummer och
            eventuellt annan relevant information som du väljer att dela med
            oss.
          </p>
          <button onClick={handleBooking} className="booking__button">
            Boka
          </button>
        </section>
      )}
    </div>
  );
};
