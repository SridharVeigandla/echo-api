const bcrypt = require('bcrypt');
const User = require('../models/user'); // Import the User model

/**
 * Handles user registration
 * POST /api/register
 */
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  // --- 1. Basic Validation ---
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please enter all fields.' });
  }

  try {
    // --- 2. Check if user already exists in the DB ---
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User with this email already exists.' });
    }

    // --- 3. Hash the password ---
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // --- 4. Create a new user instance ---
    user = new User({
      username,
      email,
      password: hashedPassword, // Store the HASHED password
    });

    // --- 5. Save the user to the database ---
    await user.save(); 

    // --- 6. Send a successful response (excluding the hashed password) ---
    res.status(201).json({ 
      message: 'User registered successfully!', 
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during registration.', error: err.message });
  }
};
