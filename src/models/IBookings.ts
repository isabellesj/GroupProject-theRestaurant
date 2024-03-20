import { ICustomer } from "./ICustomer";

export interface IBookings {
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: ICustomer;
}
