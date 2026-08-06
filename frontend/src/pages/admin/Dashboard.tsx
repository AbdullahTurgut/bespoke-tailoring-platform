import DashboardStats from "@/components/admin/DashboardStats";
import DashboardAnalytics from "@/components/admin/DashboardAnalytics";
import useAppointments from "@/hooks/useAppointments";
import RecentAppointments from "@/components/admin/RecentAppointments";
import ActivitySummary from "@/components/admin/ActivitySummary";
import DashboardCharts from "@/components/admin/DashboardCharts";
import StatusDonutChart from "@/components/admin/StatusDonutChart";
import MonthlyAppointmentChart from "@/components/admin/MonthlyAppointmentChart";

export default function Dashboard() {
  const { appointments, loading } = useAppointments();

  if (loading) {
    return (
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        min-h-[60vh]
        items-center
        justify-center
        "
      >
        <p
          className="
          text-[#C8A45D]
          tracking-[0.3em]
          uppercase
          "
        >
          Dashboard Yükleniyor...
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10">
        <h1
          className="
          text-5xl
          font-luxury
          "
        >
          Dashboard
        </h1>

        <p
          className="
          mt-4
          text-gray-400
          "
        >
          Terzi Murat yönetim paneline hoş geldiniz. Randevu durumlarını ve
          genel istatistikleri takip edin.
        </p>
      </div>

      <DashboardStats appointments={appointments} />

      <DashboardAnalytics appointments={appointments} />

      <DashboardCharts appointments={appointments} />

      <div
        className="
 grid
 gap-6
 lg:grid-cols-2
 "
      >
        <RecentAppointments appointments={appointments} />

        <ActivitySummary appointments={appointments} />

        <StatusDonutChart appointments={appointments} />

        <MonthlyAppointmentChart appointments={appointments} />
      </div>
    </div>
  );
}
