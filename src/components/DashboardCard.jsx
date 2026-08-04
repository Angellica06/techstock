function DashboardCard({ title = "", children, fixedHeight = true }) {
  return (
    <div className="bg-surface p-6 rounded-2xl border border-gray-200 shadow-card min-h-60">
      <h3 className="text-xl text-text font-medium mb-3">{title}</h3>
      <hr className="text-gray-200 my-4" />
      <div className={fixedHeight ? "w-full h-80" : "w-full"}>{children}</div>
    </div>
  );
}

export default DashboardCard;
