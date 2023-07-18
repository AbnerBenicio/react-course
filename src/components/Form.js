import { useState } from "react";

function Form() {

  const cadastrarUser = (e) => {
    e.preventDefault();
    console.log("Cadastrou o usuário");
    console.log(name)
  };

  const [name, setName] = useState("")


  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrarUser}>
        <div>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" placeholder="Digite sua senha" />
          </div>

          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
