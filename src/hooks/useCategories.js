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

  return {
    buscarCategorias,
    loading,
    error,
  };
};

export default useCategories;
