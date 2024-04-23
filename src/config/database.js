const mongoose = require('mongoose');
const User = require('../models/userModel');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://rodrigoalva1:MjM0MDEtcm9kcmln@rodrigoalva1-8081.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai:27017');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;