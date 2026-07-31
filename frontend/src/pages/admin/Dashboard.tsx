import DashboardStats from "@/components/admin/DashboardStats";
import useAppointments from "@/hooks/useAppointments";
import RecentAppointments from "@/components/admin/RecentAppointments";
import ActivitySummary from "@/components/admin/ActivitySummary";
export default function Dashboard() {
  const { appointments, loading } = useAppointments();

  if (loading) {
    return (
      <div
        className="
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

      <RecentAppointments appointments={appointments} />

      <ActivitySummary appointments={appointments} />
    </div>
  );
}
