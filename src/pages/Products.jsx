import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import DataTable from "../components/table/DataTable";
import { columns } from "../components/table/columns";
import { LuPlus } from "react-icons/lu";

const data = [
  {
    code: "PRD-001",
    name: "Notebook Dell",
    category: "Computadores",
    stock: 10,
    price: 4500,
  },
  {
    code: "ACC-001",
    name: "Mouse Logitech",
    category: "Acessórios",
    stock: 0,
    price: 120,
  },
  {
    code: "MON-001",
    name: "Monitor LG 24''",
    category: "Monitores",
    stock: 32,
    price: 899.9,
  },
];

const categoryOptions = [
  { value: "", label: "Todas as categorias" },
  { value: "computadores", label: "Computadores" },
  { value: "monitores", label: "Monitores" },
  { value: "acessorios", label: "Acessórios" },
];

const statusOptions = [
  { value: "", label: "Todos os status" },
  { value: "esgotado", label: "Esgotado" },
  { value: "estoque baixo", label: "Estoque baixo" },
  { value: "em estoque", label: "Em estoque" },
];

function Products() {
  return (
    <div className="ml-3 mr-6 my-6">
      <h1 className="text-text text-3xl font-semibold">Produtos</h1>
      <p>Cadastre, edite e acompanhe todos os produtos do seu estoque.</p>

      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="grid flex-1 gap-3 md:grid-cols-3 lg:max-w-225">
          <Input type="search" placeholder="Buscar produto..." />
          <Select options={categoryOptions} />
          <Select options={statusOptions} />
        </div>

        <Button className="flex items-center justify-center gap-2 lg:ml-auto">
          <LuPlus size={18} />
          Novo Produto
        </Button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default Products;
