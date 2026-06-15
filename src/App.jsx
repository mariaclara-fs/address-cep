import { useState } from "react";

function formataCep(valor) {
  const cep = valor.replace(/\D/g, "").slice(0, 8);

  if (cep.length <= 5) return cep;
  return `${cep.slice(0, 5)}-${cep.slice(5)}`;
}

function App() {
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  function limpaCampos() {
    setRua("");
    setBairro("");
    setCidade("");
    setEstado("");
  }

  async function buscaCep(cepDigitado) {
    const cepLimpo = cepDigitado.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setErro("CEP inválido");
      limpaCampos();
      return;
    }

    setCarregando(true);
    setErro("");

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );

      const dados = await response.json();

      if (dados.erro) {
        setErro("CEP não encontrado");
        limpaCampos();
        return;
      }

      setRua(dados.logradouro);
      setBairro(dados.bairro);
      setCidade(dados.localidade);
      setEstado(dados.uf);
    } catch {
      setErro("Erro ao consultar CEP");
      limpaCampos();
    } finally {
      setCarregando(false);
    }
  }

  function handleCepChange(e) {
    setCep(formataCep(e.target.value));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center">
          Cadastro de Endereço
        </h1>

        <input
          type="text"
          placeholder="CEP"
          value={cep}
          maxLength={9}
          onChange={handleCepChange}
          onBlur={() => buscaCep(cep)}
          className={`border p-3 rounded ${
            erro ? "border-red-500" : "border-gray-300"
          }`}
        />

        {erro && (
          <p className="text-red-500 text-sm">
            {erro}
          </p>
        )}

        {carregando && (
          <p className="text-sm text-gray-500">
            Consultando CEP...
          </p>
        )}

        <input
          type="text"
          placeholder="Rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          className="border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          className="border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          className="border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          className="border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          className="border p-3 rounded"
        />
      </form>
    </div>
  );
}

export default App;