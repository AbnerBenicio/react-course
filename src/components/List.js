import Item from "./Item";
import { useState } from "react";

function List() {
  let [val, setVal] = useState();

  const teste = (e) => {
    if (e.key === "Enter") {
      setVal(e.target.value)
      if (e.target.value === "") {
        setVal()
      }
    }
  };

  return (
    <>
      <input onKeyUp={teste} />
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="toyota" ano_lancamento={1985} />
        <Item marca={val} ano_lancamento={1765} />
        <Item />
        <h1>{val}</h1>
      </ul>
    </>
  );
}

export default List;
