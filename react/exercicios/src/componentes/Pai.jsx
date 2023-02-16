import { childrenWithProps } from '../utils/utils'
import React from 'react'

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h1>Filhos</h1>
        <ul>
            {/*<Filho nome="Lara" sobrenome={props.sobrenome} />*/}
            {/*<Filho {...props} />*/}
            {/*<Filho {...props}  nome="Carla" />*/}
            {/*{props.children}*/}
            {childrenWithProps(props)}
        </ul>
    </div>