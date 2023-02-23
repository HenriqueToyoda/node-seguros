const { SEGUROS } = require("./in-memory-db");

exports.salvarSeguro = (req, res) => {
    const seguro = req.body;

    SEGUROS.push(seguro);
    console.log('Seguro acionado', seguro);

    res.status(200).json({message: 'Seguro acionado com sucesso'});
}

exports.listarSeguros = (req, res) => {
    res.status(200).json(SEGUROS);
}
