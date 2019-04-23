const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName:String,
    password:String,
    email:String,
    create_date: { type: Date, default: Date.now }
});
//访问todo对象模型
mongoose.model('user', userSchema);
module.exports.Schema =function (modelName){
    return{model:mongoose.model(modelName)};
};