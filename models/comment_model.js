const mongoose = require('mongoose');
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/blog',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})


let commentsSchema = new Schema({
    autor: {type:String},
    mensaje:{type:String},
    fecha:{type:String}
});

let model = mongoose.model('comment', commentsSchema, 'comment');
module.exports = model;