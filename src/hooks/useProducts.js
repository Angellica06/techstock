import api from "../services/api";
import { useState } from "react";

const useProducts = () => {
  const [error, setError] = useState("");

  const listarProdutos = async () => {
    try {
      const response = await api.get("/produtos");

      const produtos = response.data;

      if (produtos.length === 0) {
        setError("Nenhuma categoria foi encontrada.");

        return {
          success: false,
          categoria: [],
        };
      }

      return {
        success: true,
        produtos,
      };
    } catch {
      setError("Ocorreu um erro ao buscar categorias. Tente novamente.");

      return {
        success: false,
        categoria: [],
      };
    }
  };

  return {
    listarProdutos,
    error,
  };
};

export default useProducts;
