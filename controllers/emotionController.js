const EmotionModel = require('../models/emotion'); // Import the User model

/**
 * Handles user registration
 * POST /api/register
 */
exports.emotion = async (req, res) => {
  const { emotion, email } = req.body;
  console.log(req.body);
// x --- 1. Basic Validation ---
  if (!emotion || !email) {
    return res.status(400).json({ message: 'Please enter all fields.' });
  }
  emotionData = new EmotionModel({
    emotion:emotion,
    email:email
  })
    await emotionData.save();
    res.status(201).json({ 
      message: 'Emotion saved successfully!', 
      emotionData:emotionData
    }); 
 
};
