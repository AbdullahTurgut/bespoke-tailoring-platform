import api from "@/api/axios";
import type { AppointmentRequest } from "@/types/appointment";

export const createAppointment = async (data: AppointmentRequest) => {
  const response = await api.post("/appointments", data);

  return response.data;
};
