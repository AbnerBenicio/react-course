import { useState } from "react";

function RendCondicional() {
  const [email, setEmail] = useState("");
  const [useEmail, setuserEmail] = useState("");

  const enviarEmail = (e) => {
    e.preventDefault();
    setuserEmail(email);
  };

  const limparEmail = () => {
    setuserEmail("")
  }

  return (
    <div>
      <h2>Cadastre o seu e-mail</h2>
      <form>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Digite seu email"
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar e-mail
        </button>

        {useEmail && (
          <div>
            <p>O email do usuário é {useEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default RendCondicional;
