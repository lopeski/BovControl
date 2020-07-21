const db = require('./conecao');

const vacaquinha = new db.Schema({
    tipo: {
        type: String,
    },
    nome: {
        type: String,
        require: true,
    },
    id: {
        type: db.Schema.Types.ObjectId,
        reuire: true,
    },
    peso: {
        type: Number,
        require: true,
    },
    idade: {
        type: Number,
        default: 0,
    }
})

const vacamodel = db.model('vaca', vacaquinha);

module.exports = vacamodel;