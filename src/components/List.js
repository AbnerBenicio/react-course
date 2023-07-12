import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="toyota" ano_lancamento={1985}/>
        <Item marca="ferrari" ano_lancamento={1765} />
        <Item />
      </ul>
    </>
  );
}

export default List;
