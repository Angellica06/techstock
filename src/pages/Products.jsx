import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import DataTable from "../components/table/DataTable";
import { columns } from "../components/table/ProductColumns";
import { LuPlus } from "react-icons/lu";
import Modal from "../components/ui/Modal";
import { useState, useEffect } from "react";
import useProducts from "../hooks/useProducts";

const statusOptions = [
  { value: "", label: "Todos os status" },
  { value: "esgotado", label: "Esgotado" },
  { value: "estoque baixo", label: "Estoque baixo" },
  { value: "em estoque", label: "Em estoque" },
];

function Products() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [status, setStatus] = useState("");

  const { listarProdutos, error } = useProducts();

  useEffect(() => {
    const carregarprodutos = async () => {
      const resultado = await listarProdutos();
      setProdutos([...resultado.produtos].reverse());
    };

    carregarprodutos();
  }, []);

  const categorias = [...new Set(produtos.map((produto) => produto.categoria))];

  const categoryOptions = [
    { value: "", label: "Todas as categorias" },
    ...categorias.map((categoria) => ({
      value: categoria,
      label: categoria,
    })),
  ];

  const produtosFiltrados = produtos.filter((produto) => {
    const correspondeBusca = produto.nome
      .toLowerCase()
      .includes(busca.toLowerCase());

    const correspondeCategoria =
      categoria === "" || produto.categoria === categoria;

    let correspondeStatus = true;

    if (status === "esgotado") {
      correspondeStatus = produto.estoque === 0;
    }

    if (status === "estoque baixo") {
      correspondeStatus = produto.estoque > 0 && produto.estoque <= 10;
    }

    if (status === "em estoque") {
      correspondeStatus = produto.estoque > 10;
    }

    return correspondeBusca && correspondeCategoria && correspondeStatus;
  });

  return (
    <div className="ml-3 mr-6 my-6">
      <h1 className="text-text text-3xl font-semibold">Produtos</h1>
      <p>Cadastre, edite e acompanhe todos os produtos do seu estoque.</p>

      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="grid flex-1 gap-3 md:grid-cols-3 lg:max-w-225">
          <Input
            type="search"
            value={busca}
            placeholder="Buscar produto..."
            onChange={(e) => setBusca(e.target.value)}
          />
          <Select
            options={categoryOptions}
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
          <Select
            options={statusOptions}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
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
        <DataTable columns={columns} data={produtosFiltrados} error={error} />
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
