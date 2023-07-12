function Form () {

    const cadastrarUser = (e) => {
        e.preventDefault()
        console.log("Cadastrou usuário")
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>

                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form