import SummaryCard from "../components/SummaryCard";
import DashboardCard from "../components/DashboardCard";
import { BiPackage } from "react-icons/bi";
import { LuTags } from "react-icons/lu";
import { MdWarningAmber, MdInventory2 } from "react-icons/md";
import DoughnutChart from "../components/charts/DoughnutChart";
import AreaChart from "../components/charts/AreaChart";

const summaryData = [
  {
    id: 1,
    title: "Total de produtos",
    value: 546,
    description: "+12 este mês",
    icon: <BiPackage className="text-green-600" />,
    color: "bg-success/80",
  },
  {
    id: 2,
    title: "Categorias",
    value: 12,
    description: "5 ativas",
    icon: <LuTags className="text-blue-600" />,
    color: "bg-info",
  },
  {
    id: 3,
    title: "Estoque baixo",
    value: 7,
    description: "Requer atenção",
    icon: <MdWarningAmber className="text-yellow-600" />,
    color: "bg-warning",
  },
  {
    id: 4,
    title: "Novos produtos",
    value: 18,
    description: "+4 esta semana",
    icon: <MdInventory2 className="text-purple-600" />,
    color: "bg-purple-100",
  },
];

const charts = [
  {
    id: 1,
    title: "Movimentações do estoque",
    component: <AreaChart />,
  },
  {
    id: 2,
    title: "Estoque por categoria",
    component: <DoughnutChart />,
  },
];

function Dashboard() {
  return (
    <div className="ml-3 mr-6 my-6">
      <h1 className="text-text text-3xl font-semibold">Dashboard</h1>
      <p>Visão geral do estoque</p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mt-6 w-full">
        {summaryData.map((card) => (
          <SummaryCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            value={card.value}
            description={card.description}
            color={card.color}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-3">
        {charts.map((chart) => (
          <DashboardCard key={chart.id} title={chart.title}>
            {chart.component}
          </DashboardCard>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
