function SummaryCard({ icon, title, value, description, color }) {
  return (
    <div className="bg-surface p-6 rounded-2xl border border-gray-200 shadow-card">
      <div className="flex items-start gap-4">
        <div className={`text-2xl p-4 rounded-xl ${color}`}>
          {icon}
        </div>

        <div>
          <h3 className="text-md font-medium text-text-light">{title}</h3>
          <span className="text-2xl font-semibold">{value}</span>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
