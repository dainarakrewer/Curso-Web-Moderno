import Entrada from "./Entrada";
import {useState} from "react";
import Cliente from "../core/Cliente";

interface FormularioProps {
    cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente.id ? props.cliente.id : null
    const [nome, setNome] = useState();
    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor="Teste"/>
            ) : false}
            <Entrada texto="Nome" valor="Teste"/>
            <Entrada texto="Idade" tipo="number" valor="Teste"/>
        </div>
    )
}