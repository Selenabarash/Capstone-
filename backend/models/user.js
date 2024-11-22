import mongoose from "mongoose"
import bcrypt from "bcrypt"


const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    bio: {type: String}, 
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String, default: '' }, // Placeholder for profile image URL
});

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
  });

  UserSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  };

  export default mongoose.model('user', UserSchema);