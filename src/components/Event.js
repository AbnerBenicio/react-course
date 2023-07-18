import Button from "./Button"

function Event (props) {
    
    const meuEvento = () => {
        console.log("ATIVANDO PRIMEIRO EVENTO")
    }

    const segundoEvento = () => {
        console.log("Salve")
    }
    
    return (
        <div>
            <p>Disparar um evento</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )
}

export default Event