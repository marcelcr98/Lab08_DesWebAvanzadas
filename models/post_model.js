const mongoose = require('mongoose');
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/blog',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})



let commentSchema = new Schema({
    autor: {type:String},
    mensaje:{type:String},
    fecha:{type:String}
});

let postsSchema = new Schema({
    titulo: {type:String, required:true},
    descripcion: {type:String, required: true},
    categoria: {type:String, required: true},
    fecha: {type: String, required:true},
    comentarios: [commentSchema]
});

let model = mongoose.model('posts', postsSchema, 'posts');
module.exports = model;