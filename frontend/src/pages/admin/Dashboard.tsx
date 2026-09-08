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
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-luxury text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
          Terzi Murat yönetim paneline hoş geldiniz. Randevu durumlarını, finansal
          görünümü ve atölye istatistiklerini buradan takip edebilirsiniz.
        </p>
      </div>

      <DashboardStats appointments={appointments} />

      <DashboardAnalytics appointments={appointments} />

      <DashboardCharts appointments={appointments} />

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        <RecentAppointments appointments={appointments} />

        <ActivitySummary appointments={appointments} />

        <StatusDonutChart appointments={appointments} />

        <MonthlyAppointmentChart appointments={appointments} />
      </div>
    </div>
  );
}
