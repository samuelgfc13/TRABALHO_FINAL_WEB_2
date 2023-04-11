const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');
const UserSchema = new mongoose.Schema({

        id: {type: String},
        nome: {type: String, required: true},
        cpf: {type: Number, required: true},
        email: {type: String},
        telefone: {type: Number},
        datanascimento: {type: Date},
        rg: {type: Number, required: true},
        endereco:{
            rua:{
                type:String,
                required: true,
            },
            bairro:{
                type:String,
                required: true,
            },
            complemento:{
                type:String,
                required: true,
            },
            numero:{
                type:Number,
                required: true,
            }
        },
        /* dadosdoimovel: {type: String, required: true}, */
        imobiliario:{type: Number, required: true},
        nivelagua: {type: Number, required: true},
        dadosdanos: {type: String, required: true},
    });
UserSchema.plugin(mongoosePaginate);
mongoose.model('Cadastro', UserSchema)