import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const UserSchema: Schema = new Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  password: { type: String, required: true }
  // Define your other fields here. For example:
  // name: { type: String, required: true },
  // amount: { type: Number, required: true },
});

export const User = model<IUser>('Salary', UserSchema);