import { useState } from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import useAuth from "../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const testarLogin = async () => {
    const resultado = await login(email, senha);

    if (resultado.success) navigate("/dashboard");
    else setError(resultado.message);
  };

  return (
    <div className="login h-screen grid grid-cols-1 lg:grid-cols-2 gap-3 justify-center items-center p-14 md:px-40">
      <div className="">
        <div className="flex items-center">
          <img src={Logo} alt="logo" />
          <h2 className="text-white text-5xl font-semibold font-display">
            TechStock
          </h2>
        </div>

        <div>
          <span className="text-gray-50">Eficiência em cada movimentação.</span>
          <p className="text-white text-xl font-medium max-w-xl mt-3">
            Gerencie produtos, monitore estoques e acompanhe indicadores em
            tempo real.
          </p>
        </div>
      </div>

      <div className="bg-white flex flex-col justify-center gap-3 rounded-2xl p-9 shadow-2xl">
        <h1 className="text-center text-primary text-3xl font-semibold">
          Acesse sua conta
        </h1>

        <label className="text-primary font-semibold">Email</label>
        <Input
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          className={"shadow-none border border-gray-500 bg-gray-100"}
        />

        <label className="text-primary font-semibold">Senha</label>
        <Input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setSenha(e.target.value)}
          className={"shadow-none border border-gray-500 bg-gray-100"}
        />

        {error && <p className="text-red-600">{error}</p>}

        <button
          disabled={email === "" || senha === ""}
          onClick={testarLogin}
          className="p-3 bg-primary text-white font-medium rounded-lg mt-3 cursor-pointer disabled:cursor-auto disabled:bg-gray-400"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
