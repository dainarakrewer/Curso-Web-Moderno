export default function Cabecalho(props) {
    // props.titulo += "!!!!!" - NÃO FUNCIONA
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}