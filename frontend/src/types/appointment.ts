import type { Suit } from "./suit";

export type CustomerRequest = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type AppointmentRequest = {
  customer: CustomerRequest;
  suit: Suit;
  price: number;
};
