const mongoose = require('mongoose');
const Cadastro = mongoose.model('Cadastro');

module.exports = {
    async insert (req, res){
        const cadastros = await Cadastro.create(req.body);
        return res.json(cadastros);
    },

    async index (req, res){
      const { page } = req.query;
      
      const cadastros = await Cadastro.paginate({}, {page, limit: 5})
      return res.json(cadastros);
    },
    async details (req, res){
        const cadastros = await Cadastro.findById(req.params.id);
        return res.json(cadastros);
    },
    async update (req, res){
        const cadastros = await Cadastro.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(cadastros);
    },
    async delete (req, res){
        await Cadastro.findByIdAndRemove(req.params.id);
        return res.send()
    }
}
