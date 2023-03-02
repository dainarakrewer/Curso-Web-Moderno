import Navegador from "@/components/Navegador";
export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/app" cor="#9400d3"/>
            <Navegador texto="Jsx" destino="/jsx" cor="crimson"/>
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
            <Navegador texto="Navegação #02" destino="/cliente/123" cor="blue"/>
            <Navegador texto="Componente com Estado" destino="/estado" cor="pink"/>
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#ffc40c"/>
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#fa054a"/>
        </div>
    )
}