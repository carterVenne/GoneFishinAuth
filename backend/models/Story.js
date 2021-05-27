const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: { type: String, required: true },
    user: { type: String, reuired: true },
    comment_text: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;