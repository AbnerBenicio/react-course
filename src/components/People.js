function People ({name, age, img, job}) {
    return (
        <div>
            <img src={img} alt={name}/>
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {job}</p>    
        </div>
    )
}

export default People