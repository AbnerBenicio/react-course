function Saudacao(props) {
  return (
    <>
      {props.name ? <h2>Olá {props.name}</h2> : null}
    </>
  );
}

export default Saudacao;
