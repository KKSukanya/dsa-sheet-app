const mongoose = require('mongoose');

const subTopicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    leetcode: { type: String },
    youtube: { type: String },
    article: { type: String },
    level: { type: String, enum: ['Easy','Medium','Hard'], default: 'Easy' },
    status: { type: String, enum: ['Pending','Done'], default: 'Pending' }
});

const topicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subTopics: [subTopicSchema]
});

module.exports = mongoose.model('Topic', topicSchema);
