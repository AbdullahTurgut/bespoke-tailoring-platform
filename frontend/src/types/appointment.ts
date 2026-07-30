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

export type AppointmentStatus =
  | "PENDING"
  | "CONTACTED"
  | "COMPLETED"
  | "CANCELLED";

export interface Appointment {
  id: number;
  customerName: string;
  email: string;
  phone: string;
  message: string;
  fabric: string;
  lapel: string;
  button: string;
  price: number;
  createdAt: string;
  status: AppointmentStatus;
}
