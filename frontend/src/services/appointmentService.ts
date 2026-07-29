import axios from "axios";

const API_URL = "http://localhost:8080/api/appointments";

export const createAppointment = async (data: unknown) => {
  const response = await axios.post(API_URL, data);

  return response.data;
};
