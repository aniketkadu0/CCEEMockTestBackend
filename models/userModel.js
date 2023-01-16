const { bool } = require("joi");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            trim: true,
            required:true,
        },
        lastName:{
            type: String,
            trim:true,
            required:true,
        },
        email:{
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        password:{
            type: String,
            required: true,
        },
        role:{
            type: String,
            default : 'user'
        },
        verified:{
            type: Boolean,
            default : false
        },
        paymentStatus:{
            type: Boolean,
            default : false
        },
        tests : [{}]
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);