const {Schema,model} = require('mongoose');

const toDoListSchema = new Schema({
    userId: {type:String,required:true,unique:true},
    toDo: {type:String,required: true},
    date: {type:Date,required:true},
});

module.exports = model('todolists',toDoListSchema);