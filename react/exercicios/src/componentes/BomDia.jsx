import { Fragment } from 'react'

// export default props => [
//     <h1 key='h1'>Bom dia {props.nome}! Você tem {props.idade} anos</h1>,
//     <h2 key='h2'>Até breve!</h2>
// ]

export default props =>
    //pode ser uma div
    <Fragment>
        <h1>Bom dia {props.nome}! Você tem {props.idade} anos</h1>
        <h2>Até breve!</h2>
    </Fragment>