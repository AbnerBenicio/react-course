import styles from "./Frase.module.css"
import { useState } from "react"

function Frase () {

    let [frase, setFrase] = useState("frase")

    return (
        <div>
            <p className={styles[frase]} onClick={() => {frase.includes("Ativa") ? setFrase("frase"): setFrase("fraseAtiva")} }>Este é um componente!</p>

        </div>
    )
}

export default Frase