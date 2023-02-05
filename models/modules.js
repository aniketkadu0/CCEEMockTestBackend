const mongoose = require("mongoose");
const moduleSchema = new mongoose.Schema(
    {
        modules: [String]
    }
);

module.exports = mongoose.model("Modules", moduleSchema);