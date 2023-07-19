import PropType from "prop-types";

function OutraLista(props) {
  return (
    <>
      {props.lista.filter(frame => {
        return (
            frame.includes("a")
        )
      }).map((frame, idx) => {
        return <h1 key={idx}>O framework {frame}</h1>;
      })}

      
    </>
  );
}

OutraLista.propTypes = {
  lista: PropType.array,
};

export default OutraLista;
