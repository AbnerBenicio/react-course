import './App.css';

function App() {

  const name = "Abner"

  function soma (a, b) {
    return a+b
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Olá, {name}</h1>
      <p>Soma: {soma(2, 3)}</p>
      <img src={url} alt='img aleatória'></img>
    </div>
  );
}

export default App;
