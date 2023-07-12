import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="toyota" />
        <Item marca="ferrari" />
      </ul>
    </>
  );
}

export default List;
