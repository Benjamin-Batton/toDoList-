const {Schema,model,} = require('mongoose');

const DirectorSchema = new Schema({
    name:{type:String,required:true, unique: true},
    age: {type:String,required: true},
    // name:String,
    // age:String,
});
module.exports = model('Director',DirectorSchema);

