import api from "@/api/axios";
import axios from "axios";
import type {
  AppointmentRequest,
  Appointment,
  AppointmentStatus,
} from "@/types/appointment";

export const createAppointment = async (data: AppointmentRequest) => {
  const response = await api.post("/appointments", data);

  return response.data;
};

const API = "http://localhost:8080/api/appointments";

export const getAppointments = async (): Promise<Appointment[]> => {
  const response = await axios.get<Appointment[]>(API);

  return response.data;
};

export const getAppointmentsByStatus = async (
  status: AppointmentStatus,
): Promise<Appointment[]> => {
  const response = await axios.get<Appointment[]>(`${API}?status=${status}`);

  return response.data;
};

export const updateAppointmentStatus = async (
  id: number,
  status: AppointmentStatus,
): Promise<Appointment> => {
  const response = await axios.put<Appointment>(`${API}/${id}/status`, {
    status,
  });

  return response.data;
};
