import type { Suit } from "./suit";

export type CustomerRequest = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type AppointmentRequest = {
  customer: CustomerRequest;
  suit?: Suit | null;
  price?: number | null;
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
  fabric?: string | null;
  lapel?: string | null;
  button?: string | null;
  price?: number | null;
  createdAt: string;
  status: AppointmentStatus;
}
