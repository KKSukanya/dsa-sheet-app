const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');

// Get all topics
router.get('/', async (req,res) => {
    try {
        const topics = await Topic.find();
        res.json(topics);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

// Update subtopic status
router.put('/subtopic/:topicId/:subTopicId', async (req,res) => {
    const { topicId, subTopicId } = req.params;
    const { status } = req.body;

    try {
        const topic = await Topic.findById(topicId);
        const subtopic = topic.subTopics.id(subTopicId);
        subtopic.status = status;
        await topic.save();
        res.json({ message: 'Status updated' });
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
