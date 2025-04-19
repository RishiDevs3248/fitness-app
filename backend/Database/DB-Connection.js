const mongoose = require('mongoose');

const connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/FitnessTracker', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Connected to MongoDB successfully!');
    } catch (error) {
        console.error('❌ Database Connection Error:', error.message);
    }
};

module.exports = connection;
