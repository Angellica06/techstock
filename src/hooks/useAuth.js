import api from "../services/api";

const useAuth = () => {
  const login = async (email, password) => {
    try {
      const response = await api.get("/users");

      const user = response.data.find(
        (user) => user.email === email && user.password === password,
      );

      if (!user) {
        return {
          success: false,
          message: "E-mail ou senha inválidos.",
        };
      }

      localStorage.setItem("user", JSON.stringify(user));

      return {
        success: true,
        user,
      };
    } catch {
      return {
        success: false,
        message: "Ocorreu um erro ao realizar o login. Tente novamente",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  return {
    login,
    logout,
  };
};

export default useAuth;
