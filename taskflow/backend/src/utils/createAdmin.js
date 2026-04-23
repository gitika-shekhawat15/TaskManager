import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import dotenv from 'dotenv';

dotenv.config();

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  
  const admin = await User.create({
    name: 'Admin',
    email: 'admin@taskflow.com',
    password: 'admin123',
    role: 'admin',
  });

  console.log('✅ Admin created:', admin.email);
  process.exit();
};

createAdmin();