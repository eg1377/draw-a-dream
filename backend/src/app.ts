import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/yourDatabaseName';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));


  