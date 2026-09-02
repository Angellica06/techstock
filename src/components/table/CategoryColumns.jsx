import { FiEdit3, FiTrash2 } from "react-icons/fi";

export const columns = ({ onEdit, onDelete }) => [
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
          className="cursor-pointer rounded-lg border p-2 text-primary-light transition-colors hover:bg-blue-50"
          title="Editar"
          onClick={() => onEdit(row.original)}
        >
          <FiEdit3 size={18} />
        </button>

        <button
          className="cursor-pointer rounded-lg border p-2 text-red-600 transition-colors hover:bg-red-50"
          title="Excluir"
          onClick={() => onDelete(row.original)}
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    ),
  },
];
