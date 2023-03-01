export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Dainara ${req.query.codigo}`,
        idade: 24,
        email: `dainara_krewer@hotmail.com ${req.query.codigo}`
    })
}