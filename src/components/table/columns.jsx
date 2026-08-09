import { FiEdit3, FiTrash2 } from "react-icons/fi";

export const columns = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "code",
    header: "Código",
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "price",
    header: "Preço",
    cell: ({ row }) => `R$ ${row.original.price.toFixed(2).replace(".", ",")}`,
  },
  {
    id: "status",
    header: "Status",
    cell: ({ row }) => {
      const stock = row.original.stock;

      if (stock === 0) {
        return (
          <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
            Esgotado
          </span>
        );
      }

      if (stock <= 10) {
        return (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700">
            Estoque baixo
          </span>
        );
      }

      return (
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          Em estoque
        </span>
      );
    },
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
