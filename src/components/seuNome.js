function SeuNome (props) {
    return (
        <div>
            <p>Digite seu nome:</p>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => {props.setName(e.target.value)}}/>
        </div>
    )
}

export default SeuNome