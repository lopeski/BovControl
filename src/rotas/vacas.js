const express = require('express');
const router = express.Router();
const vacamodel = require('../database/vacamodel')

//Pega uma vaquinha pelo id na url
router.get('/:id', async (req, res) => {
    try {
        const vaquinha = await vacamodel.findById(req.params.id);
        return res.send({ vaquinha });
    } catch (e) {
        console.log(e);
        return res.status(400)
    }
});
router.get('/', async (req, res) => {
    try {
        const vaquinha = await vacamodel.find();
        return res.send({ vaquinha });
    } catch (e) {
        console.log(e);
        return res.status(400)
    }
});
//cria uma vaquinha
router.put('/', async (req, res) => {
    try {
        const { tipo, nome, peso, idade } = req.body;
         const vaquinha = await vacamodel.create({ tipo, nome, peso, idade});
         await vaquinha.save();
        return res.send({ Sucess:vaquinha });
    } catch (e) {
        console.log(e);
        return res.status(400).send({error: 'Erro ao criar nova vaquinha'});
    }
})
//atualiza uma vaquinha pelo id no body
router.post('/', async (req, res) => {
    try {
        const { tipo, nome, peso, idade, id } = req.body;
        const vaquinha = await vacamodel.findOneAndUpdate(id,{ tipo, nome, peso, idade});
        await vaquinha.save();
        return res.send({ Sucess:vaquinha });
    } catch (e) {
        console.log(e);
        return res.status(400).send({error: 'Erro ao criar nova vaquinha'});
    }
})
//atualiza uma vaquinha pelo id no url
router.post('/:id', async (req, res) => {
    try {
        const { tipo, nome, peso, idade } = req.body;
        const vaquinha = await vacamodel.findOneAndUpdate(req.params.id,{ tipo, nome, peso, idade});
        await vaquinha.save();
        return res.send({ Sucess:vaquinha });
    } catch (e) {
        console.log(e);
        return res.status(400).send({error: 'Erro ao criar nova vaquinha'});
    }
})
//apaga uma vaquinha pelo id
router.delete('', async (req, res) => {
    try {
        const { id } = req.body;
        await vacamodel.findByIdAndRemove(id);
        return res.send({ Sucess: 'Vaquinha foi deletada'})
    } catch (e) {
        console.log(e);
        return res.status(400).send({ error: 'Erro ao deletar vaquinha'})
    }
})
//apaga uma vaquinha pelo id na url
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.body;
        await vacamodel.findByIdAndRemove(req.params.id);
        return res.send({ Sucess: 'Vaquinha foi deletada'})
    } catch (e) {
        console.log(e);
        return res.status(400).send({ error: 'Erro ao deletar vaquinha'})
    }
})
module.exports = (app) => app.use('/vaquinhas', router);
