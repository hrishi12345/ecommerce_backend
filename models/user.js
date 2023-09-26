import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { SALT } from '../config/jswtoken.js';

const { ObjectId } = mongoose.Types; // Import ObjectId

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^\S+@\S+\.\S+$/.test(value); // Basic email format validation
      },
      message: 'Invalid email format',
    },
  },
  password: {
    required: true,
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  cart: {
    type: Array,
    default: [],
  },
  wishList: [{
    type: ObjectId, // Now you can use ObjectId
    ref: "Product"
  }]
});

userSchema.pre('save', async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, SALT);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('users', userSchema);

export default User;
