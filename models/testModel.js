const mongoose = require("mongoose");
const testSchema = new mongoose.Schema(
    {
        moduleName:{
            type: String,
            trim: true,
            required:true,
        },
        questions:[
            {
                id : Number,
                question : String,
                options : [String],
                answer : String
            }
        ],  
    },
    {timestamps: true}
);

module.exports = mongoose.model("Test", testSchema);