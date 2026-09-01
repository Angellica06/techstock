import { useState } from "react";
import api from "../services/api";

const useCategories = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const buscarCategorias = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await api.get("/categorias");

      const categoria = response.data;

      if (categoria.length === 0) {
        setError("Nenhuma categoria foi encontrada.");

        return {
          success: false,
          categoria: [],
        };
      }

      return {
        success: true,
        categoria,
      };
    } catch {
      setError("Ocorreu um erro ao buscar categorias. Tente novamente.");

      return {
        success: false,
        categoria: [],
      };
    } finally {
      setLoading(false);
    }
  };

  const criarCategoria = async (dados) => {
    setLoading(true);

    try {
      const response = await api.post("/categorias", dados);

      return {
        success: true,
        categoria: response.data,
        message: "Categoria criada com sucesso!",
      };
    } catch {
      return {
        success: false,
        message: "Ocorreu um erro ao criar a categoria. Tente novamente.",
      };
    } finally {
      setLoading(false);
    }
  };

  const editarCategoria = async (id, dados) => {
    setLoading(true);

    try {
      const response = await api.put(`/categorias/${id}`, dados);

      return {
        success: true,
        categoria: response.data,
        message: "Categoria atualizada com sucesso!",
      };
    } catch {
      return {
        success: false,
        message: "Ocorreu um erro ao atualizar a categoria. Tente novamente.",
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    buscarCategorias,
    criarCategoria,
    editarCategoria,
    loading,
    error,
  };
};

export default useCategories;
