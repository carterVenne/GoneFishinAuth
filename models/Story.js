const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const storySchema = new Schema({
    catchlocation: {
        type: String,
        allowNull: false,
        trim: true
    },
    fishstory: {
        type: String,
        allowNull: false,
        trim: true
        },
    fishspecies: {
        type: String,
        allowNull: false,
        trim: true
    },
    weight: {
        type: String,
        allowNull: false,
        trim: true
    },
    length: {
        type: String,
        allowNull: false,
        trim: true
    }
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;