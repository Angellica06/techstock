import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { LuPlus } from "react-icons/lu";
import DataTable from "../components/table/DataTable";
import { columns } from "../components/table/CategoryColumns";
import Modal from "../components/ui/Modal";
import { useState } from "react";

const data = [
  {
    name: "Computadores",
    description: "Computadores e notebooks",
    products: 32,
  },
  {
    name: "Monitores",
    description: "Monitores e telas",
    products: 18,
  },
  {
    name: "Acessórios",
    description: "Periféricos e acessórios",
    products: 45,
  },
];

function Categorias() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="ml-3 mr-6 my-6">
      <h1 className="text-text text-3xl font-semibold">Categorias</h1>
      <p>Gerencie as categorias dos seus produtos.</p>

      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="grid flex-1 gap-3 md:grid-cols-3 lg:max-w-225">
          <Input type="search" placeholder="Buscar categoria..." />
        </div>

        <Button
          className="flex items-center justify-center gap-2 lg:ml-auto"
          onClick={() => setIsOpenModal(!isOpenModal)}
        >
          <LuPlus size={18} />
          Nova categoria
        </Button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <DataTable columns={columns} data={data} />
      </div>

      <Modal
        isOpenModal={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title="Nova categoria"
        description="Adicione uma nova categoria ao estoque."
        submitText="Adicionar"
      >
        <div className="col-span-2">
          <label>Nome da categoria</label>
          <Input type="text" placeholder="Nome da categoria" />
        </div>

        <div className="col-span-2">
          <label>Descrição</label>
          <Input type="text" placeholder="Descrição" />
        </div>
      </Modal>
    </div>
  );
}

export default Categorias;
