import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { LuPlus } from "react-icons/lu";
import DataTable from "../components/table/DataTable";
import { columns } from "../components/table/CategoryColumns";
import Modal from "../components/ui/Modal";
import { useState, useEffect } from "react";
import useCategories from "../hooks/useCategories";
import Toast from "../components/ui/Toast";

function Categorias() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [busca, setBusca] = useState("");
  const [toast, setToast] = useState("");
  const [categoriaEditando, setCategoriaEditando] = useState(null);

  const { buscarCategorias, criarCategoria, editarCategoria, loading, error } =
    useCategories();

  useEffect(() => {
    const carregarCategorias = async () => {
      const resultado = await buscarCategorias();

      setCategorias([...resultado.categoria].reverse());
    };

    carregarCategorias();
  }, []);

  const categoriasFiltradas = categorias.filter((categoria) =>
    categoria.nome.toLowerCase().includes(busca.toLowerCase()),
  );

  const limparFormulario = () => {
    setNome("");
    setDescricao("");
    setCategoriaEditando(null);
  };

  const handleEdit = (categoria) => {
    setCategoriaEditando(categoria);
    setNome(categoria.nome);
    setDescricao(categoria.descricao);
    setIsOpenModal(true);
  };

  const handleSubmit = async () => {
    const nomeExiste = categorias.some(
      (categoria) =>
        categoria.nome.toLowerCase().trim() === nome.toLowerCase().trim() &&
        categoria.id !== categoriaEditando?.id,
    );

    if (nomeExiste) {
      setToast({
        message: "Já existe uma categoria com esse nome.",
        type: "warning",
      });

      return;
    }

    if (categoriaEditando) {
      const resultado = await editarCategoria(categoriaEditando.id, {
        nome,
        descricao,
      });

      if (resultado.success) {
        setCategorias((categoriasAtuais) =>
          categoriasAtuais.map((categoria) =>
            categoria.id === resultado.categoria.id
              ? resultado.categoria
              : categoria,
          ),
        );

        setIsOpenModal(false);
        limparFormulario();
      }

      setToast({
        message: resultado.message,
        type: resultado.success ? "success" : "error",
      });

      return;
    }

    const resultado = await criarCategoria({
      nome,
      descricao,
    });

    if (resultado.success) {
      setCategorias((categoriasAtuais) => [
        resultado.categoria,
        ...categoriasAtuais,
      ]);

      setIsOpenModal(false);
      limparFormulario();
    }

    setToast({
      message: resultado.message,
      type: resultado.success ? "success" : "error",
    });
  };

  return (
    <div className="ml-3 mr-6 my-6">
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "success" })}
      />

      <h1 className="text-text text-3xl font-semibold">Categorias</h1>
      <p>Gerencie as categorias dos seus produtos.</p>

      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="grid flex-1 gap-3 md:grid-cols-3 lg:max-w-225">
          <Input
            type="search"
            placeholder="Buscar categoria..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <Button
          className="flex items-center justify-center gap-2 lg:ml-auto"
          onClick={() => {
            limparFormulario();
            setIsOpenModal(true);
          }}
        >
          <LuPlus size={18} />
          Nova categoria
        </Button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <DataTable
          columns={columns({
            onEdit: handleEdit,
          })}
          data={categoriasFiltradas}
          error={error}
        />
      </div>

      <Modal
        isOpenModal={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
          limparFormulario();
        }}
        title={categoriaEditando ? "Editar categoria" : "Nova categoria"}
        description={
          categoriaEditando
            ? "Altere os dados da categoria."
            : "Adicione uma nova categoria ao estoque."
        }
        submitText={
          loading
            ? categoriaEditando
              ? "Salvando..."
              : "Adicionando..."
            : categoriaEditando
              ? "Salvar alterações"
              : "Adicionar"
        }
        onSubmit={handleSubmit}
        disabled={nome.trim() === "" || descricao.trim() === "" || loading}
      >
        <div className="col-span-2">
          <label>Nome da categoria</label>
          <Input
            type="text"
            placeholder="Nome da categoria"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="col-span-2">
          <label>Descrição</label>
          <Input
            type="text"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Categorias;
