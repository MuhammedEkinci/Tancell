const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const admins = new Schema({
    username:{
        type: String,
        require: true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps: true});

const Admin = mongoose.model("Admin", admins);
module.exports = Admin;