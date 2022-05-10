const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name required to create the database'],
        trim:true,
        maxlength:[20,'Enter name less than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    }
});


module.exports = mongoose.model('task',TaskSchema);