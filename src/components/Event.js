import Button from "./Button"

function Event (props) {
    
    const meuEvento = () => {
        console.log(`O número ${props.numero} foi ativado`)
    }
    
    return (
        <div>
            <p>Disparar um evento</p>
            <Button text="Primeiro evento"/>
            <button onClick={meuEvento}>ATIVAR</button>
        </div>
    )
}

export default Event