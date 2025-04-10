const musicaModel = require('../../Model/DAO/musica');

const listarMusicas = (req, res) => {
    musicaModel.getAllMusicas((err, results) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(results);
    });
};

const buscarMusica = (req, res) => {
    const id = req.params.id;
    musicaModel.getMusicaById(id, (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.length === 0) return res.status(404).json({ msg: "Música não encontrada" });
        res.status(200).json(result[0]);
    });
};

const criarMusica = (req, res) => {
    const novaMusica = req.body;
    musicaModel.createMusica(novaMusica, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ msg: "Música cadastrada com sucesso", id: result.insertId });
    });
};

const deletarMusica = (req, res) => {
    const id = req.params.id;
    musicaModel.deleteMusica(id, (err) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ msg: "Música deletada com sucesso" });
    });
};

module.exports = {
    listarMusicas,
    buscarMusica,
    criarMusica,
    deletarMusica
};
