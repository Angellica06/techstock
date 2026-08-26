import { FiEdit3, FiTrash2 } from "react-icons/fi";

export const columns = [
  {
    accessorKey: "nome",
    header: "Categorias",
  },
  {
    accessorKey: "descricao",
    header: "Descrição",
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <button
          className="border rounded-lg p-2 text-primary-light transition-colors hover:bg-blue-50 cursor-pointer"
          title="Editar"
          onClick={() => console.log("Editar", row.original)}
        >
          <FiEdit3 size={18} />
        </button>

        <button
          className="border rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50 cursor-pointer"
          title="Excluir"
          onClick={() => console.log("Excluir", row.original)}
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    ),
  },
];
