import axios from "axios";
import { ICustomerPut } from "../models/ICustomerPut";

export const fetchCustomers = async (customerIds: string[]) => {
  try {
    const responses = await Promise.all(
      customerIds.map((customerId) =>
        axios.get<ICustomerPut[]>(
          `https://school-restaurant-api.azurewebsites.net/customer/${customerId}`
        )
      )
    );
    const customersData = responses.map((response) => response.data);
    return customersData.flat();
  } catch (error) {
    console.error("Error fetching customers:", error);
    return [];
  }
};
