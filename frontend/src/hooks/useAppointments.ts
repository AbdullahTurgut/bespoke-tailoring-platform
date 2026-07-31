import { useCallback, useEffect, useState } from "react";
import type { Appointment } from "@/types/appointment";
import { getAppointments } from "@/services/appointmentService";

export default function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchAppointments = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getAppointments();

      setAppointments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  return {
    appointments,
    setAppointments,
    loading,
    refresh: fetchAppointments,
  };
}
