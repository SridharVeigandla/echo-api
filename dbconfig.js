let mongoose = require('mongoose');



const connectDB = async () => {
  try {
    // ... your connection logic ...
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.di8rr.mongodb.net/echo-db?retryWrites=true&w=majority', {
      // ... options ...
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Use module.exports to make the function available to other files
module.exports = connectDB; 
