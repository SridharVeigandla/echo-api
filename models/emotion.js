const mongoose = require('mongoose');


const emotionSchema = mongoose.Schema({
      emotion: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

const Emotion = mongoose.model('emotion',emotionSchema);
module.exports = Emotion;