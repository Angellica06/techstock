import Logo from "../assets/logo.png";

function Login() {
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
        <input
          className="border border-gray-500 focus:outline-none focus:border-2 focus:border-primary bg-gray-100 rounded-2xl p-3"
          type="text"
          placeholder="Digite seu email"
        />

        <label className="text-primary font-semibold">Senha</label>
        <input
          className="border border-gray-500 focus:outline-none focus:border-2 focus:border-primary bg-gray-100 rounded-2xl p-3"
          type="password"
          placeholder="Digite sua senha"
        />

        <button className="p-3 bg-primary text-white font-medium rounded-2xl mt-2">
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
