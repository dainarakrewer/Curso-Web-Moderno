import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
      new Cliente('Ana', 34, '1'),
      new Cliente('Maria', 10, '2'),
      new Cliente('Dainara', 24, '3'),
      new Cliente('Lara', 1, '4')
  ]

    function clienteSelecionado(cliente: Cliente) {

    }

    function clienteExcluido(cliente: Cliente) {

    }

  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}
