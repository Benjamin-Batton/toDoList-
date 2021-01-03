const {Schema,model,} = require('mongoose');

const MovieSchema = new Schema({
    name: {type:String,required: true},
    genre: {type:String, requred: true},
    derectorId:{type:String, ref: 'directors' ,required: true,},
    year:{type:String,required:true}
});

module.exports = model('Movie',MovieSchema);