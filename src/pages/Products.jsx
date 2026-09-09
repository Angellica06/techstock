import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import DataTable from "../components/table/DataTable";
import { columns } from "../components/table/ProductColumns";
import { LuPlus } from "react-icons/lu";
import Modal from "../components/ui/Modal";
import { useState, useEffect } from "react";
import useProducts from "../hooks/useProducts";

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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [produtos, setProdutos] = useState([]);

  const { listarProdutos, error } = useProducts();

  useEffect(() => {
    const carregarprodutos = async () => {
      const resultado = await listarProdutos();

      setProdutos([...resultado.produtos].reverse());
    };

    carregarprodutos();
  }, []);

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

        <Button
          className="flex items-center justify-center gap-2 lg:ml-auto"
          onClick={() => setIsOpenModal(!isOpenModal)}
        >
          <LuPlus size={18} />
          Novo Produto
        </Button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <DataTable columns={columns} data={produtos} error={error} />
      </div>

      <Modal
        isOpenModal={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title="Novo produto"
        description="Adicione um novo produto ao estoque."
        submitText="Adicionar"
      >
        <div className="col-span-2">
          <label>Nome do produto</label>
          <Input type="text" placeholder="Nome do produto" />
        </div>

        <div className="col-span-2">
          <label>Categoria</label>
          <Select options={categoryOptions} />
        </div>

        <div>
          <label>Estoque</label>
          <Input type="number" placeholder="Estoque" />
        </div>

        <div>
          <label>Estoque mínimo</label>
          <Input type="number" placeholder="Estoque mínimo" />
        </div>

        <div className="col-span-2">
          <label>Preço</label>
          <Input type="text" placeholder="Preço R$" />
        </div>
      </Modal>
    </div>
  );
}

export default Products;
