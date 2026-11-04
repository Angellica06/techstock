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

  const criarProduto = async (novoProduto) => {
    try {
      const response = await api.post("produtos", novoProduto);

      return {
        success: true,
        produto: response.data,
      };
    } catch {
      setError("Erro ao cadastrar produto. Tente novamente.");

      return {
        success: false,
      };
    }
  };

  const gerarCodigo = async () => {
    try {
      const response = await api.get("contadorProdutos");

      const proximoCodigo = response.data.ultimoCodigo + 1;
      await api.patch("/contadorProdutos", {
        ultimoCodigo: proximoCodigo,
      });

      return `PRD-${String(proximoCodigo).padStart(4, "0")}`;
    } catch {
      setError("Erro ao gerar código do produto.");
      return null;
    }
  };

  return {
    listarProdutos,
    criarProduto,
    gerarCodigo,
    error,
  };
};

export default useProducts;
