import api from "@/lib/axios";

import type {
  Appointment,
  AppointmentRequest,
  AppointmentStatus,
} from "@/types/appointment";

export const createAppointment = async (data: AppointmentRequest) => {
  const response = await api.post("/appointments", data);

  return response.data;
};

export const getAppointments = async (): Promise<Appointment[]> => {
  const response = await api.get<Appointment[]>("/appointments");

  return response.data;
};

export const getAppointmentsByStatus = async (
  status: AppointmentStatus,
): Promise<Appointment[]> => {
  const response = await api.get<Appointment[]>("/appointments", {
    params: {
      status,
    },
  });

  return response.data;
};

export const updateAppointmentStatus = async (
  id: number,
  status: AppointmentStatus,
): Promise<Appointment> => {
  const response = await api.patch<Appointment>(`/appointments/${id}/status`, {
    status,
  });

  return response.data;
};
